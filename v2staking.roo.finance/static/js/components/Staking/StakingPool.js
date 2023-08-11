import {ChainId, useEthers} from '@usedapp/core';
import React, {useState, useEffect} from 'react';
import Web3 from 'web3';
import abi from '../../abi/contractABI.json';
import tokenAbi from '../../abi/tokenAbi.json';
import colAbi from '../../abi/collectionAbi.json';
import {Link} from 'react-router-dom';

import rewardAbi from '../../abi/rewardToken.json';
// import { Modal } from "react-responsive-modal";
import NftInventoryModal from '../Modal/NftInventoryModal';
import StakingPoolInventoryModal from '../Modal/StakingPoolInventoryModal';
import {useConnectWallet} from '@web3-onboard/react';
import Countdown from 'react-countdown';
import {useLazyQuery, useMutation} from '@apollo/client';
import {collectionData} from '../../graphql/collections/collectionQueries';
import {useNavigate, useParams} from 'react-router';
import {updateCollection} from '../../graphql/collections/collectionMutations';
import {networkHashMap} from '../common/constants';
import {useSetChain} from '@web3-onboard/react';
import Modal from '@mui/material/Modal';
import {ToastContainer, toast} from 'react-toastify';

import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {saveCollection} from '../../redux/action';
import {ethers} from 'ethers';
import bigInt from 'big-integer';

const StakingPool = ({renderData}) => {
  // MUI Popup Start UseState
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => setOpen(false);
  // MUI Popup End UseState
  const [{connectedChain, chains}] = useSetChain();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loader, setLoader] = useState('');
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [reward, setReward] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalStaked, setTotalStaked] = useState(0);
  const [myStaked, setMyStaked] = useState(0);
  const [stakingFee, setStakingFee] = useState(null);
  const [withdrawFee, setWithdrawFee] = useState(null);
  const [claimFee, setClaimFee] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [rewardsPerWeek, setRewardsPerWeek] = useState();
  const [rewardsDuration, setRewardsDuration] = useState(null);
  const [rewardAmount, setRewardAmount] = useState(null);
  const [duration, setDuration] = useState(null);
  const [btnLoading, setBtnLoading] = useState(false);
  // const [boostedCount, setBoostedCount] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [decimals, setDecimals] = useState(18);
  // const [display, setDisplay] = useState("null");
  const [contractOwner, setContractOwner] = useState('');
  const [{wallet, connecting}, connect, disconnect] = useConnectWallet();
  const {contract_address, collection_address, token_address} = renderData;

  const etherProvider = () => {
    try {
      return new ethers.providers.Web3Provider(wallet?.provider);
    } catch (error) {}
  };
  const _pp = () => {
    try {
      return new ethers.providers.Web3Provider(wallet?.provider);
    } catch (error) {}
  };
  const etherSigner = etherProvider()?.getSigner();
  const etherContractInst = new ethers.Contract(
    contract_address?.toLowerCase(),
    abi,
    etherSigner
  );
  const etherTokenContractInst = new ethers.Contract(
    token_address?.toLowerCase(),
    tokenAbi,
    etherSigner
  );

  const etherCollContrInst = new ethers.Contract(
    collection_address?.toLowerCase(),
    colAbi,
    etherSigner
  );

  useEffect(() => {
    if (wallet) {
      getSymbol();
    }
    return () => {};
  }, [wallet]);
  const getSymbol = async () => {
    try {
      let symbol = await etherTokenContractInst.symbol();
      setSymbol(symbol);
      let decimal = await etherTokenContractInst.decimals();
      // console.log('🚀 ~ getSymbol ~ decimal', decimal);
      setDecimals(decimal);
      console.log('🚀 ~ getSymbol ~ symbol', symbol);
    } catch (error) {
      console.log('🚀 ~ getSymbol ~ error', error);
    }
  };

  const web3 = new Web3(wallet?.provider);

  const contractInstance = new web3.eth.Contract(abi);
  contractInstance.options.address = contract_address?.toLowerCase();

  const collectionContractInstance = new web3.eth.Contract(colAbi);
  collectionContractInstance.options.address =
    collection_address?.toLowerCase();

  // set the chargeStake, chargeWithdraw, chargeClaim needs to be set.
  const renderer = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
      setIsCompleted(true);
      return (
        <span className="complete_countdown_text">Countdown complete!</span>
      );
    } else {
      return (
        <span className="time_part">
          {days}d {hours}h:{minutes}m:{seconds}s
        </span>
      );
    }
  };

  useEffect(() => {
    const body = document.querySelector('html');
    body.style.overflow = isModalOpen ? 'hidden' : 'scroll';
  }, [isModalOpen]);

  const navigate = useNavigate();

  const [UpdateCollection] = useMutation(updateCollection);

  const dateInputHandler = (e) => {
    setDuration(parseInt(new Date().getTime() + e.target.value * 1000));
  };

  const rewardsDurationHandler = async () => {
    try {
      setBtnLoading(true);
      let data = {
        _id: renderData._id,
        expire_date: `${duration}`
      };
      let _addDate = axios
        .put(process.env.REACT_APP_API_URL, data)
        .then((res, err) => {
          if (err) {
            setLoading(false);
            throw err;
          }
          setBtnLoading(false);

          navigate('/');
          return res;
        });
      // if (duration) {
      //   UpdateCollection({
      //     variables: {
      //       payload: {
      //         _id: renderData._id,
      //         expire_date: `${duration}`,
      //       },
      //     },
      //     onCompleted: (data) => {
      //       console.log("dataUpdated", data);
      //       navigate("/");
      //     },
      //   });
      // }
    } catch (error) {
      console.log('🚀 ~ rewardsDurationHandler ~ error', error);
      toast.error('Something went wrong');
    }
  };

  const calculateGas = async (params) => {
    try {
      let gasss = await etherContractInst.calculateFee(
        wallet?.accounts[0]?.address, //user address
        params[0].length, //length of nft
        params[1], //isboost
        params[2] //boostnftid
      );
      // console.log('🚀 ~ calculateGas ~ gasss', gasss.toString());
      return gasss.toString();
    } catch (error) {
      console.log('🚀 ~ calculateGas ~ error', error);
    }
  };

  const handleStake = async (selectedNfts, boostnft) => {
    // console.log('🚀 ~ handleStake ~ selectedNfts', selectedNfts);
    // console.log('🚀 ~ handleStake ~ selectedboostnftNfts', boostnft);

    try {
      let callStake = await etherCollContrInst
        .isApprovedForAll(wallet?.accounts[0]?.address, contract_address)
        .then(async (data) => {
          // console.log('🚀 ~ .then ~ data', !data);
          if (!data) {
            // console.log('🚀 ~ .then ~ data', data);
            etherCollContrInst
              .setApprovalForAll(contract_address, true)
              .then(async (data) => {
                let params;
                if (boostnft.length > 0) {
                  params = [[...selectedNfts], true, boostnft[0]];
                  // console.log('🚀 ~ .then ~ if params', params);
                } else {
                  params = [[...selectedNfts], false, 13];
                  // console.log('🚀 ~ .then else  ~ params', params);
                }

                let _gas = await calculateGas(params);
                // console.log('🚀 ~ .then ~ _gas', _gas);

                // console.log('🚀 ~ .then ~ selectedNfts', selectedNfts.length);
                // console.log('🚀 ~ .then ~ selectedNfts stakingFee', stakingFee);

                let _tx = await etherContractInst
                  .stake(...params, {
                    value: _gas
                  })
                  .then(async (data) => {
                    setIsModalOpen(false);
                    setIsLoading(false);
                    // console.log('🚀 ~ .stake ~ data', data);
                    getTotalStaked();
                    toast.success('Successfully stake!');
                  })
                  .catch((err) => {
                    let _stringify = JSON.stringify(err);
                    // console.log('🚀 ~ .then ~ _stringify', _stringify);
                    let _parse = JSON.parse(_stringify);
                    // console.log('🚀 ~ .then ~ _parse', _parse);
                    setIsLoading(false);

                    if (_parse?.error?.message) {
                      toast.error(_parse?.error?.message);
                      setIsLoading(false);
                      // console.log('🚀 ~ .then ~ _parse', _parse);
                    }
                    if (_parse?.data?.message) {
                      toast.error(_parse?.data?.message);
                    }
                  });
              });
          } else {
            let params;
            if (boostnft.length > 0) {
              params = [[...selectedNfts], true, boostnft[0]];
              // console.log('🚀 ~ .then if~ params', params);
            } else {
              params = [[...selectedNfts], false, 13];
              // console.log('🚀 ~ .then  else~ params', params);
            }
            let _gas = await calculateGas(params);

            // console.log('🚀 ~ .then ~ val', val);
            let _tx = await etherContractInst

              .stake(...params, {value: _gas})
              .then(async (data) => {
                // console.log('stake', data);
                setIsModalOpen(false);
                setIsLoading(false);
                getTotalStaked();
                toast.success('Successfully stake!');
              })
              .catch((err) => {
                setIsLoading(false);

                console.log('err', err);
                let _stringify = JSON.stringify(err);
                // console.log('🚀 ~ .then ~ _stringify', _stringify);
                let _parse = JSON.parse(_stringify);
                // console.log('🚀 ~ .then ~ _parse', _parse);

                if (_parse?.error?.message) {
                  toast.error(_parse?.error?.message);
                  setIsLoading(false);
                  // console.log('🚀 ~ .then ~ _parse', _parse);
                }
                // console.log(
                //   '🚀 ~ .then ~ _parse?.data?.message',
                //   _parse?.message
                // );
                if (_parse?.message) {
                  toast.error(_parse?.message);
                  setIsLoading(false);
                }
              });
          }
        })
        .catch(async (err) => {
          console.log('err', err);
        });
    } catch (error) {
      console.log('🚀 ~  ~ error', error);
    }
  };

  const handleWithdraw = async (selectedNfts) => {
    const params = [collection_address.toLowerCase(), [...selectedNfts]];
    const gasEstimate = await contractInstance.methods['withdraw'](
      ...params
    ).estimateGas({
      from: wallet?.accounts[0]?.address,
      value: selectedNfts.length * withdrawFee
    });
    const gasLimit = gasEstimate * 2;
    const tx = await contractInstance.methods['withdraw'](...params)
      .send({
        from: wallet?.accounts[0]?.address,
        value: selectedNfts.length * withdrawFee,
        gas: gasLimit
      })
      .then(async (data) => {
        // const receipt = await web3.eth.getTransactionReceipt(
        //   tx.transactionHash
        // );
        // console.log("receipt", receipt.status);
        setIsWithdrawModalOpen(false);
        setIsLoading(false);
        getTotalStaked();
      })
      .catch((err) => {
        console.log('err', err);
        setIsLoading(false);
      });
    // const gasFee = await calculateGas();

    // contractInstance.methods
    //   .withdraw(collection_address, [...selectedNfts])
    //   .send({
    //     from: wallet?.accounts[0]?.address,
    //     value: selectedNfts.length * withdrawFee,
    //     // value: boostedCount > 1 ? "0" : selectedNfts.length * withdrawFee,
    //     // gas: selectedNfts.length == 1 ? 350000 : selectedNfts.length * 180000,
    //     gasLimit:
    //       wallet.label != "MetaMask" &&
    //       (selectedNfts.length == 1 ? 262500 : selectedNfts.length * 131250),
    //     gasPrice: web3.utils.toWei(
    //       gasFee.speeds[2].maxFeePerGas.toString(),
    //       "gwei"
    //     ),
    //   })
    //   .then((receipt) => {
    //     console.log("receipt=======>", receipt);
    //     setIsWithdrawModalOpen(false);
    //     setIsLoading(false);
    //     getTotalStaked();
    //   })
    //   .catch((err) => {
    //     console.log("error=======>", err);
    //     setIsLoading(false);
    //   });
  };
  const _chargeClaim = async () => {
    //new
    let _gas = await etherContractInst.chargeClaim();
    //old
    // let _gas = await contractInstance.methods.chargeClaim().call();
    return _gas;
  };

  const getAdmin = async () => {
    // console.log('getadmin creator', renderData?.creator_address);
    // console.log('🚀 ~ getAdmin ~ etherContractInst', etherContractInst);
    let _admin = await etherContractInst.owner();
    setContractOwner(_admin);
    // console.log('🚀 ~ getAdmin ~ _admin', _admin);
  };
  const handleClaim = async () => {
    try {
      let _gas = await _chargeClaim();
      // console.log('🚀 ~ handleClaim ~ _gas', _gas.toString());
      setLoading(true);
      let _claim = await etherContractInst.claimReward({
        value: _gas.toString()
      });
      let _wait = await _claim.wait();
      if (_wait) {
        setLoading(false);
        toast.success('Successfully claim!');
        calculateReward();
      }
    } catch (err) {
      console.log('err', err);
      let er = JSON.stringify(err);
      let _par = JSON.parse(er);
      if (_par?.reason) {
        toast.error(_par?.reason);
      }
      // console.log('🚀 ~ handleClaim ~ _par', _par);
      setLoading(false);
    }
  };

  const getTotalStaked = async () => {
    // console.log('🚀 ~ getTotalStaked ~ getTotalStaked');
    try {
      let totalStaked = await etherContractInst.totalStaked(collection_address);
      let myStake = await etherContractInst.getUserStakedNftId(
        collection_address
      );
      // console.log('🚀 ~ getTotalStaked ~ myStake', myStake.length);
      // console.log('🚀 ~ getTotalStaked ~ totalStaked', totalStaked);
      if (myStake) {
        setMyStaked(myStake?.length);
      }
      if (totalStaked) {
        setTotalStaked(totalStaked.toString());
        // console.log('🚀 ~ .then ~ calculate  Reward');

        calculateReward();
        setIsLoading(false);
      }
    } catch (error) {
      console.log('🚀 ~ getTotalStaked ~ error', error);
    }
  };

  // useEffect(() => {
  //   if (wallet && wallet.label) {
  //     setDisplay(wallet.label + `${wallet.label != "MetaMask"}`);
  //   }
  // }, [wallet]);

  const calculateReward = async () => {
    if (wallet?.accounts[0]?.address) {
      try {
        let _cal = await etherContractInst.earned(
          collection_address,
          wallet?.accounts[0]?.address
        );
        // console.log('🚀 ~ calculateReward ~ _cal', _cal.toString());
        setReward(_cal.toString());
      } catch (error) {
        console.log('🚀 ~ useEffect ~ error', error);
      }
    }
  };
  useEffect(async () => {
    if (wallet) {
      getTotalStaked();
      getAdmin();
    }
  }, [renderData, reward, loading, wallet]);
  useEffect(() => {
    // console.log('🚀 ~ .then ~ calculate  Reward');
    if (wallet) {
      calculateReward();
    }
  }, [wallet]);

  useEffect(() => {
    if (wallet) {
      getTotalStaked();
    }

    return () => {};
  }, [loading]);

  useEffect(async () => {
    // try {
    //   const amount = new Promise((res, rej) => {
    //     // console.log('eeee', etherContractInst);
    //     contractInstance.methods
    //       .rewardAmount()
    //       .call()
    //       .then((receipt) => {
    //         setRewardAmount(receipt);
    //         console.log('🚀 ~ .then ~ receipt', receipt);
    //         res(receipt);
    //       });
    //   });

    //   const duration = new Promise((res, rej) => {
    //     contractInstance.methods
    //       .rewardsDuration()
    //       .call()
    //       .then((receipt) => {
    //         // setRewardsDuration(receipt);
    //         res(receipt);
    //       });
    //   });
    //   Promise.all([amount, duration])
    //     .then(([result1, result2]) => {
    //       console.log(result1, result2, '_durati');
    //       setRewardAmount(result1);
    //       setRewardsDuration(result2);
    //     })
    //     .catch((error) => console.error(error));

    //   console.log('🚀 ~ useEffect ~ _durati', _durati);
    // } catch (error) {
    //   console.log('🚀 ~ useEffect ~ error', error);
    // }
    if (wallet) {
      setRewardAmountMethod();
    }
  }, [renderData, wallet]);
  const setRewardAmountMethod = async () => {
    try {
      let _durati = await contractInstance.methods.rewardsDuration().call();
      // console.log('🚀 ~ setRewardAmountMethod ~ _durati', _durati);
      let _reward = await contractInstance.methods.rewardAmount().call();
      // console.log('🚀 ~ setRewardAmountMethod ~ _reward', _reward);
      setRewardsDuration(_durati);
      setRewardAmount(_reward);
      setRewardsPerWeek(parseInt(_reward) / (parseInt(_durati) / 604800));
    } catch (error) {
      console.log('🚀 ~ setRewardAmountMethod ~ error', error);
    }
  };

  useEffect(() => {
    setRewardsPerWeek(
      parseInt(rewardAmount) / (parseInt(rewardsDuration) / 604800)
    );
  }, [rewardsDuration]);

  // useEffect(() => {
  //   rewardContractInstance.methods
  //     .symbol()
  //     .call()
  //     .then((data) => {
  //       setSymbol(data);
  //     });

  //   rewardContractInstance.methods
  //     .decimals()
  //     .call()
  //     .then((data) => {
  //       // console.log(data);
  //       setDecimals(data);
  //     });
  // }, [reward]);

  useEffect(() => {
    if (process.env.REACT_APP_ENVIRONMENT == 'DEV') {
      setChainId(ChainId.CronosTestnet);
    } else {
      setChainId(ChainId.Cronos);
    }
  }, [wallet]);

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  const withdrawModalHandler = () => {
    setIsWithdrawModalOpen(!isWithdrawModalOpen);
  };
  const exitModalHandler = async () => {
    try {
      setLoader('eject');
      let _eject = await etherContractInst.removeFromStake();
      let _wait = await _eject.wait();
      if (_wait) {
        setLoader('');

        getTotalStaked();
        toast.success('Successfully Eject!');
        // console.log('🚀 ~ .then ~ calculate  Reward');
        calculateReward();
      }
    } catch (err) {
      console.log('err', err);
      let er = JSON.stringify(err);
      let _par = JSON.parse(er);
      if (_par?.reason) {
        toast.error(_par?.reason);
      }
      setLoader('');
    }

    // setIsWithdrawModalOpen(!isWithdrawModalOpen);
  };

  // useEffect(() => {
  //   if (wallet) {
  //     contractInstanceB.methods
  //       .isBoostActive()
  //       .call()
  //       .then((data) => {
  //         console.log("isBoostActive", data);
  //         if (data) {
  //           contractInstanceB.methods
  //             .getBoostCount(wallet?.accounts[0]?.address)
  //             .call()
  //             .then((data) => {
  //               console.log("data", data);
  //               setBoostedCount(data);
  //             })
  //             .catch((err) => {
  //               console.log("err", err);
  //             });
  //         }
  //       })
  //       .catch((err) => {
  //         console.log("err", err);
  //       });
  //   }
  // }, [wallet]);

  return (
    <>
      <ToastContainer />
      {/* {true && ( */}
      <section className="stack_two_new_list">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="stackCardWrapper">
                {wallet &&
                  contractOwner?.toLowerCase() ==
                    wallet.accounts[0].address.toLowerCase() && (
                    <>
                      <Link
                        to={`/admin/${contract_address}`}
                        className="project-link"
                      >
                        Update Contract
                      </Link>
                    </>
                  )}

                <div className="card-header bg-inherit border-0 p-0">
                  <h2 className="m-0">
                    <button
                      className="staking-btn d-block text-left w-100 py-4"
                      type="button"
                      data-toggle="collapse"
                      data-target={`#collapse${renderData?._id}`}
                    >
                      <div className="row">
                        <div className="col-12 col-md-8">
                          <div className="media flex-column flex-md-row">
                            <img
                              className="avatar-max-lg"
                              src={
                                renderData?.picture
                                  ? renderData?.picture
                                  : '/img/placeholder.png'
                              }
                              alt=""
                            />
                            <div className="content media-body  ml-md-4 w-100">
                              <h4 className="m-0">{renderData?.name}</h4>
                              <span className="symbol">
                                {renderData?.symbol}
                              </span>
                              {/* {wallet && <span>{display}</span>} */}
                              <span className="address">
                                address:
                                <a
                                  href={
                                    process.env.REACT_APP_ENVIRONMENT == 'DEV'
                                      ? `https://testnet.cronoscan.com/address/${contract_address}`
                                      : `https://cronoscan.com/address/${contract_address}`
                                  }
                                  target={'_blank'}
                                >
                                  {' '}
                                  {/* {contract_address} */}
                                  {contract_address?.substring(0, 5)}...
                                  {contract_address?.substring(37, 42)}
                                </a>
                              </span>

                              <p className="description">
                                {renderData?.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <span className="time_data">
                            My Staked : {myStaked ?? ''} NFTs
                          </span>
                          <span className="time_data">
                            Total Staked : {totalStaked ?? ''} NFTs
                          </span>
                          {renderData?.expire_date && (
                            <Countdown
                              date={new Date(parseInt(renderData?.expire_date))}
                              intervalDelay={0}
                              precision={3}
                              renderer={renderer}
                            />
                          )}

                          {wallet &&
                            renderData?.creator_address?.toLowerCase() ==
                              wallet.accounts[0].address.toLowerCase() && (
                              <>
                                <input
                                  className="rewardDurationInput"
                                  type="number"
                                  placeholder="Duration in Seconds"
                                  onChange={dateInputHandler}
                                />
                                <button
                                  className="btn input-btn mt-2 rewardDurationBtn"
                                  onClick={rewardsDurationHandler}
                                  disabled={!duration ? true : false}
                                >
                                  {btnLoading ? (
                                    <div className="col-12 text-center">
                                      <div
                                        className="spinner-border"
                                        role="status"
                                      >
                                        <span className="visually-hidden"></span>
                                      </div>
                                    </div>
                                  ) : (
                                    'SetRewardDuration'
                                  )}
                                </button>
                              </>
                            )}
                        </div>
                      </div>
                    </button>
                  </h2>
                </div>
                <div
                  id={`collapse${renderData?._id}`}
                  className="collapse show"
                  data-parent="#gameon-accordion"
                >
                  {/* Card Body */}

                  <div className="card-body">
                    {wallet?.accounts[0]?.address && wallet ? (
                      chainId !== networkHashMap[connectedChain?.id] ? (
                        <div>
                          <span>Please Switch Your Network!</span>
                        </div>
                      ) : (
                        <div className="row d-flex justify-content-between">
                          {/* Single Staking Item */}
                          {!isCompleted && (
                            <div className="col-12 col-md-2 single-staking-item input-box">
                              <div className="input-area d-flex flex-column">
                                <button
                                  // href="#"
                                  className="btn input-btn mt-2"
                                  // onClick={modalHandler}

                                  onClick={modalHandler}
                                >
                                  Deposit
                                </button>
                              </div>
                            </div>
                          )}
                          {/* <Modal
                            open={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            center
                          >
                            <NftInventoryModal
                              renderData={renderData}
                              handleStake={handleStake}
                              isLoading={isLoading}
                              setIsLoading={setIsLoading}
                            />
                          </Modal> */}
                          <Modal open={isModalOpen} onClose={modalHandler}>
                            <NftInventoryModal
                              renderData={renderData}
                              handleStake={handleStake}
                              isLoading={isLoading}
                              setIsLoading={setIsLoading}
                              handleClose={modalHandler}
                            />
                          </Modal>
                          <Modal
                            open={isWithdrawModalOpen}
                            onClose={() => setIsWithdrawModalOpen(false)}
                          >
                            <StakingPoolInventoryModal
                              renderData={renderData}
                              handleWithdraw={handleWithdraw}
                              isLoading={isLoading}
                              setIsLoading={setIsLoading}
                              handleClose={() => setIsWithdrawModalOpen(false)}
                            />
                          </Modal>
                          {/* Single Staking Item */}
                          {/* <div className='col-12 col-md-3 single-staking-item input-box'>
                            <span className='item-title mb-2'>Withdraw</span>
                            <div className='input-area d-flex flex-column'>
                              <button
                                // href="#"
                                className='btn input-btn mt-2'
                                onClick={withdrawModalHandler}
                              >
                                Withdraw
                              </button>
                            </div>
                          </div> */}
                          <div className="col-12 col-md-3 single-staking-item input-box">
                            <div className="input-area d-flex flex-column">
                              <button
                                // href="#"
                                className="btn input-btn mt-2"
                                onClick={exitModalHandler}
                              >
                                {loader === 'eject' ? (
                                  <div className="col-12 text-center">
                                    <div
                                      className="spinner-border"
                                      role="status"
                                    >
                                      <span className="visually-hidden"></span>
                                    </div>
                                  </div>
                                ) : (
                                  "Eject All NFT's"
                                )}
                              </button>
                            </div>
                          </div>
                          {/* Single Staking Item */}
                          {/* {!isCompleted && ( */}
                          <div className="col-12 col-md-2 single-staking-item input-box">
                            <div className="input-area d-flex flex-column">
                              <button
                                // href="#"
                                className="btn input-btn mt-2"
                                onClick={handleClaim}
                              >
                                {loading ? (
                                  <div className="col-12 text-center">
                                    <div
                                      className="spinner-border"
                                      role="status"
                                    >
                                      <span className="visually-hidden"></span>
                                    </div>
                                  </div>
                                ) : (
                                  'Claim'
                                )}
                              </button>
                            </div>
                          </div>
                          <div className="col-12 col-md-3 single-staking-item input-box">
                            <span className="item-title mb-2">
                              Estimated rewards
                            </span>
                            <div className="input-area d-flex flex-column">
                              <h4 className="price m-0">
                                {reward > 0
                                  ? parseFloat(reward / 10 ** decimals).toFixed(
                                      4
                                    )
                                  : 0}{' '}
                                {symbol && symbol}
                              </h4>
                              <span className="reward my-2">
                                {/* Rewards are depleted, ask admins to fund it. */}
                              </span>
                            </div>
                          </div>
                          {/* )} */}
                          <div className="col-12 col-md-2 single-staking-item input-box">
                            <span className="item-title mb-2">Pool Rate</span>
                            <div className="input-area d-flex flex-column">
                              <h4 className="price m-0">
                                {rewardsPerWeek
                                  ? (
                                      rewardsPerWeek *
                                      10 ** -decimals
                                    ).toLocaleString('en-US', {
                                      maximumFractionDigits: 2
                                    })
                                  : 0}{' '}
                                {symbol && symbol}/Week
                              </h4>
                            </div>
                          </div>
                        </div>
                      )
                    ) : (
                      <div>
                        <span>Please Connect Your Wallet!</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center">
                    <a
                      href="https://medium.com/@KangaDegens/rules-v2-staking-ae832d28c76c"
                      target="_blank"
                      className="text-center"
                    >
                      Stake rules & Info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* )} */}
    </>
  );
};

const StakingNFT = () => {
  const reduxDispatch = useDispatch();
  const params = useParams();

  const userData = useSelector((state) => state?.state);

  const [renderData, setRenderData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const { contract_address, collection_address, token_address } = renderData;

  const [GetCollection, {loading}] = useLazyQuery(collectionData, {
    fetchPolicy: 'network-only'
  });

  useEffect(async () => {
    if (userData?.collections?.length > 0) {
      let _data = userData?.collections.filter(
        (e) => e.contract_address == params.id
      );
      setRenderData(_data[0]);
      setIsLoading(false);
    }
  }, [params, userData?.collections]);

  useEffect(async () => {
    let collectionData = await axios.get(process.env.REACT_APP_API_URL);
    reduxDispatch(
      saveCollection({
        collections: collectionData?.data
      })
    );

    return () => {};
  }, []);

  // useEffect(() => {
  //   GetCollection({
  //     variables: {
  //       filters: {
  //         contract_address: params.id,
  //       },
  //     },
  //     onCompleted: (data) => {
  //       setRenderData(data.Collections[0]);
  //       setIsLoading(false);
  //     },
  //     onError: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }, [params]);

  return (
    <>
      <ToastContainer />
      {isLoading && (
        <section className="loader_sec stakingPool_loader">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="loader_wrapper">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <div>{renderData && <StakingPool renderData={renderData} />}</div>
    </>
  );
};

export default StakingNFT;
