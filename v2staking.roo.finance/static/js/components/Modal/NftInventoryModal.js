import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { getNfts } from '../../graphql/users/userQueries';
import { useEthers } from '@usedapp/core';
import NftCard from '../Cards/NftCard';
import { useConnectWallet } from '@web3-onboard/react';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { EvmChain } from '@moralisweb3/common-evm-utils';
import Moralis from 'moralis';
import BoostNftCard from '../Cards/BoostNftCard';
import Web3 from 'web3';
import abi from '../../abi/contractABI.json';
import ReactPaginate from 'react-paginate';

const NftInventoryModal = ({
  renderData,
  handleStake,
  isLoading,
  setIsLoading,
  handleClose,
}) => {
  // console.log('🚀 ~ renderData', renderData);
  const [nftData, setNftData] = useState(null);
  const [allNftData, setAllNftData] = useState(null);
  const [boostNftData, setBoostNftData] = useState(null);
  const [selectedNfts, setSelectedNfts] = useState([]);
  const [selectedBoostNft, setSelectedBoostNft] = useState([]);
  const [checked, setChecked] = useState(false);
  const [disableNfts, setdisableNfts] = useState([]);
  const [alStaked, setAlstaked] = useState({});

  const [GetNfts] = useLazyQuery(getNfts, {
    fetchPolicy: 'network-only',
  });
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  const web3 = new Web3(wallet?.provider);
  const contractInstance = new web3.eth.Contract(abi);
  contractInstance.options.address =
    renderData?.contract_address?.toLowerCase();

  const confirmStake = (selectedNfts, selectedBoostnft) => {
    // console.log('stake-------', selectedNfts,selectedBoostnft);
    setIsLoading(true);
    handleStake(selectedNfts, selectedBoostnft);
  };

  const selectMultipleHandler = () => {
    console.log('check');
    setChecked(!checked);
  };

  useEffect(() => {
    // console.log('disss alstaked',Object.keys (alStaked))
    // console.log('disss nfts',disableNfts)
    // console.log("finallll nfts", [...new Set([...disableNfts,...Object.keys(alStaked)])])
    let _alldisableNfts = [
      ...new Set([...disableNfts, ...Object.keys(alStaked)]),
    ];
    if (checked) {
      const _arr = nftData.filter(
        (item) => !_alldisableNfts.includes(item.token_id)
      );
      console.log('🚀 ~ useEffect 1234567~ _arr', _arr);

      const arr = _arr.map((item, id) => {
        return item.token_id;
      });
      console.log('🚀 ~ arr ~ arr', arr);
      setSelectedNfts(arr.slice(0, 40));
    } else {
      setSelectedNfts([]);
    }
  }, [checked]);

  useEffect(async () => {
    runApp();
    getBoostNft();
  }, [renderData]);
  const getBoostNft = async () => {
    try {
      const boostNftAddress = renderData?.boostNftAddress;

      const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address: wallet?.accounts[0]?.address.toLowerCase(),
        chain: '0x19',
        tokenAddresses: [boostNftAddress],
        mediaItems: true,
      });

      // console.log('🚀 ~ runApp ~ response', response.raw);

      setIsLoading(false);
      setBoostNftData(response?.raw?.result);
    } catch (e) {
      console.error(e);
    }
  };
  const runApp = async () => {
    try {
      const chain = EvmChain.CRONOS;
      // console.log('renderdata runApp', renderData);
      const collectionAddr = renderData?.collection_address;

      const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address: wallet?.accounts[0]?.address.toLowerCase(),
        chain: '0x19',
        tokenAddresses: [collectionAddr],
        mediaItems: true,
      });

      // console.log('🚀 ~ runApp ~ response', response.raw);

      setIsLoading(false);
      setNftData(response?.raw?.result);
      setAllNftData(response?.raw?.result);
      alreadyStakeNfts(response?.raw?.result);
      disableNft();
    } catch (e) {
      console.error(e);
    }
  };

  const disableNft = async () => {
    let _disable = await contractInstance.methods
      .getUserStakedNftId(renderData?.collection_address)
      .call({ from: wallet?.accounts[0]?.address })
      .then((data) => {
        setdisableNfts(data);
      });
  };

  const alreadyStakeNfts = async (allNfts) => {
    console.log('🚀 ~ alreadyStakeNfts ~ allNfts', allNfts);
    let object = {};
    for (let i = 0; i < allNfts.length; i++) {
      const item = allNfts[i];
      let _alreadyStakeNfts = await contractInstance.methods
        .alreadyStakedNft(item?.token_id)
        .call()
        .then((data) => {
          if (data) {
            object[item.token_id] = data;
          }
          setAlstaked(object);
        });
    }
  };

  const loadMoreNfts = () => {
    setNftData((prev) => [...prev, ...allNftData.slice(0, 30)]);
  };

  useEffect(() => {
    console.log('selectedNfts', selectedNfts);
    console.log('selectedboostNfts', selectedBoostNft);
  }, [selectedNfts, selectedBoostNft]);

  const cardSelectHandle = (tokenId) => {
    if (!selectedNfts.includes(tokenId)) {
      setSelectedNfts([...selectedNfts, tokenId]);
    } else {
      const filter = selectedNfts.filter((id) => {
        return id != tokenId;
      });
      setSelectedNfts(filter);
    }
  };

  const boostNftcardSelectHandle = (tokenId) => {
    if (!selectedBoostNft.includes(tokenId)) {
      setSelectedBoostNft([tokenId]);
    } else {
      const filter = selectedBoostNft.filter((id) => {
        return id != tokenId;
      });
      setSelectedBoostNft(filter);
    }
  };

  useEffect(() => {
    if (selectedNfts.length > 40) {
      setSelectedNfts(selectedNfts.slice(0, 40));
    }
  }, [selectedNfts]);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: 350, sm: 690, md: 1000 },
    bgcolor: '#16182d',
    // border: "2px solid #000",
    // boxShadow: 24,
    p: '35px 25px 25px',
    borderRadius: '15px',
  };

  const createIpfsUrl = (e) => {
    let url = e.split('//');
    console.log('🚀 ~ createIpfsUrl ~ url', url);
  };
  const closeHandler = () => {
    handleClose();
  };

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const itemsPerPage = 40;
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = nftData?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(nftData?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % nftData?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Box sx={style}>
        <Box sx={{ position: 'relative' }}>
          <CloseIcon
            sx={{
              position: 'absolute',
              top: '-53px',
              right: '-20px',
              color: '#ffffff',
              zIndex: '999999',
              cursor: 'pointer',
              fontSize: { xs: '45px', md: '45px' },
              pr: '15px',
            }}
            onClick={closeHandler}
          />
          <Container>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={2}
                sx={{
                  marginTop: '30px',
                  maxHeight: { xs: '400px', sm: '430px', md: '350px' },
                  minHeight: '85px',
                  overflowY: 'auto',
                  paddingRight: '15px',
                }}
              >
                {!nftData && (
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <CircularProgress />
                    </Box>
                  </Grid>
                )}
                {currentItems &&
                  currentItems?.map((item, idx) => {
                    return (
                      <Grid
                        key={`pdt_${idx}`}
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}
                        // onClick={() => cardSelectHandle(item.tokenId)}
                      >
                        <NftCard
                          item={item}
                          cardSelectHandle={cardSelectHandle}
                          selectedNfts={selectedNfts}
                          renderData={renderData}
                        />
                      </Grid>
                    );
                  })}

                {/* <Grid container my={2}>
                  <Grid item md={12} display={'flex'} justifyContent={'center'}>
                    <button
                      className='w-auto btn btn-block text-end'
                      onClick={loadMoreNfts}
                    >
                      Load More
                    </button>
                  </Grid>
                </Grid> */}

                {/* Boost nft  section start */}
                <Grid container>
                  <Grid item md={12} display={'flex'} justifyContent={'end'}>
                    <ReactPaginate
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={20}
                      pageCount={pageCount}
                      renderOnZeroPageCount={null}
                      
                      previousLabel="previous"
                      nextLabel="next"
                      breakLabel="..."
                      breakClassName="page-item"
                      breakLinkClassName="page-link"
                      marginPagesDisplayed={2}
                      containerClassName="pagination justify-content-center"
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                      previousClassName="page-item"
                      previousLinkClassName="page-link"
                      nextClassName="page-item"
                      nextLinkClassName="page-link"
                      activeClassName="active"
                      // eslint-disable-next-line no-unused-vars
                      // hrefBuilder={(page, pageCount, selected) =>
                      //   page >= 1 && page <= pageCount ? `/page/${page}` : '#'
                      // }
                      hrefAllControls
                      // forcePage={currentPage}
                      onClick={(clickEvent) => {
                        console.log('onClick', clickEvent);
                        // Return false to prevent standard page change,
                        // return false; // --> Will do nothing.
                        // return a number to choose the next page,
                        // return 4; --> Will go to page 5 (index 4)
                        // return nothing (undefined) to let standard behavior take place.
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item md={12}>
                    {/* <hr className='myBorder' /> */}

                    <h4 className='mt-3 mb-0 text-center myBorder'>
                      Boost NFT
                    </h4>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid
                        container
                        spacing={2}
                        sx={{
                          marginTop: '30px',
                          paddingRight: '15px',
                        }}
                      >
                        {!boostNftData && (
                          <Grid item xs={12}>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <CircularProgress />
                            </Box>
                          </Grid>
                        )}
                        {boostNftData &&
                          boostNftData.map((item, idx) => {
                            return (
                              <Grid
                                key={`pdt_${idx}`}
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                lg={3}
                                // onClick={() => cardSelectHandle(item.tokenId)}
                              >
                                <BoostNftCard
                                  item={item}
                                  boostNftcardSelectHandle={
                                    boostNftcardSelectHandle
                                  }
                                  selectedBoostNft={selectedBoostNft}
                                  renderData={renderData}
                                />
                              </Grid>
                            );
                          })}
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>

                {/* Boost nft  section start */}

                {selectedNfts.length > 40 && (
                  <Box>Please select no more than 40 NFTs at once!</Box>
                )}
                {nftData && !nftData.length && (
                  <Box
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'center',
                    }}
                  >
                    <Typography component={'span'}>
                      No Nfts to stake!
                    </Typography>
                  </Box>
                )}
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box className='stake_popup_btn text-center mt-4'>
                    {nftData && nftData.length > 0 && (
                      <Box sx={{ display: 'flex' }}>
                        <Typography
                          component={'input'}
                          type={'checkbox'}
                          onChange={selectMultipleHandler}
                          checked={checked}
                        />
                        <Typography component={'p'} sx={{ ml: '5px' }}>
                          Select max NFTs
                        </Typography>
                      </Box>
                    )}
                    {selectedNfts.length == 40 && (
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography component={'span'}>
                          Cannot select more than 20 NFTs!
                        </Typography>
                      </Box>
                    )}
                    <button
                      className='btn input-btn mt-2'
                      onClick={() =>
                        confirmStake(selectedNfts, selectedBoostNft)
                      }
                      disabled={!selectedNfts.length}
                    >
                      {isLoading ? (
                        <div className='col-12 text-center'>
                          <div className='spinner-border' role='status'>
                            <span className='visually-hidden'></span>
                          </div>
                        </div>
                      ) : (
                        'Stake'
                      )}
                    </button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default NftInventoryModal;
