import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import abi from '../../abi/contractABI.json';
import { useConnectWallet } from '@web3-onboard/react';
import { ethers } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';

export default function Fee(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  useEffect(() => {
    _getTotalFund();
    return () => {};
  }, []);

  const etherProvider = () => {
    try {
      return new ethers.providers.Web3Provider(wallet?.provider);
    } catch (error) {
      console.log('🚀 ~ StakingPool ~ error', error);
    }
  };
  const etherSigner = etherProvider()?.getSigner();
  const standardtokenContract = new ethers.Contract(
    props?.address?.toLowerCase(),
    abi,
    etherSigner
  );
  console.log('🚀 ~ Fee ~ etherContractInst', standardtokenContract);
  const [stakeFee, setStakeFee] = useState('');
  const [claimfee, setClaimFee] = useState('');
  const [chargePayeAddr, setChargePayeAddr] = useState('');

  const _setChargeFee = async () => {
    try {
      setIsLoading(true);
      let fee = await standardtokenContract.setChargeFee(stakeFee, claimfee);
      let waitForTx = await fee.wait();
      if (waitForTx) {
        setIsLoading(false);
        toast.success('Transaction successful!')
      }
      console.log('🚀 ~ const_claimChargeFee= ~ waitForTx', waitForTx);
    } catch (error) {
      setIsLoading(false);
      let _stringify = JSON.stringify(error);
      let _parse = JSON.parse(_stringify);
      if (_parse?.error?.data?.message) {
        toast.error(_parse?.error?.data?.message);
      }
    }
  };
  const _setChargePayee = async () => {
    try {
      setIsLoading2(true);
      let fee = await standardtokenContract
        .setChargePayee(chargePayeAddr)
        
      let waitFortx = await fee.wait();
      if (waitFortx) {
        setIsLoading2(false);
        toast.success('Transaction successful!')

      }
    } catch (error) {
      let _stringify = JSON.stringify(error);
      let _parse = JSON.parse(_stringify);
      if (_parse?.error?.data?.message) {
        toast.error(_parse?.error?.data?.message);
      }
      console.log('🚀 ~ const_setChargePayee= ~ error', error);
      setIsLoading2(false);
    
    }
  };
  const _claimChargeFee = async () => {
    try {
      setIsLoading3(true);
      let fee = await standardtokenContract.claimChargeFee();

      let waitForTx = await fee.wait();
      if (waitForTx) {
        setIsLoading3(false);
        toast.success('Transaction successful!')

      }
      console.log('🚀 ~ const_claimChargeFee= ~ waitForTx', waitForTx);
    } catch (error) {
      setIsLoading3(false);
      let _stringify = JSON.stringify(error);
      let _parse = JSON.parse(_stringify);
      if (_parse?.error?.data?.message) {
        toast.error(_parse?.error?.data?.message);
      }

      console.log('🚀 ~ const_claimChargeFee= ~ error', error);
    }
  };
  const _getTotalFund = async () => {
    try {
      console.log(
        '🚀 ~ const_getTotalFund=async ~ standardtokenContract',
        standardtokenContract
      );
      let amount = await standardtokenContract.getTotalFund();
      console.log('🚀 ~ const_getTotalFund=async ~ amount', amount);
      

    } catch (error) {
      console.log('🚀 ~ const_getTotalFund=async ~ error', error);
    }
  };

  return (
    <>
    <ToastContainer />
      <div className='container'>
        <h5 className='mx-md-3 mb-1'>Set charge fee</h5>
        <div className='row '>
          <div className='col-6  '>
            <div className='form-group'>
              <label htmlFor='name'>Stake fee</label>
              <input
                type='text'
                id='stakeFee'
                name='stakeFee'
                placeholder='Enter stake fee'
                required='required'
                value={stakeFee}
                onChange={(e) => setStakeFee(e.target.value)}
              />
            </div>
          </div>
          <div className='col-6  '>
            <div className='form-group'>
              <label htmlFor='name'>claim fee</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Enter claim fee'
                required='required'
                value={claimfee}
                onChange={(e) => setClaimFee(e.target.value)}
              />
            </div>
          </div>
          <div className='col  ' style={{ marginLeft: '16px' }}>
            {isLoading ? (
              <div className='spinner-border' role='status'>
                <span className='visually-hidden'></span>
              </div>
            ) : (
              <button
                className='btn btn-primary active '
                onClick={_setChargeFee}
              >
                submit
              </button>
            )}
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row '>
          <div className='col-6  '>
            <h5 className='mx-md-3 mb-1'>Set charge payee</h5>
            <div className='form-group'>
              <label htmlFor='name'>Address</label>
              <input
                type='text'
                id='payeeAddress'
                name='payeeAddress'
                placeholder='Enter payee address'
                required='required'
                value={chargePayeAddr}
                onChange={(e) => setChargePayeAddr(e.target.value)}
              />
            </div>
            <div className='col-12'>
              {isLoading2 ? (
                <div className='spinner-border' role='status'>
                  <span className='visually-hidden'></span>
                </div>
              ) : (
                <button
                  className='btn btn-primary active'
                  onClick={_setChargePayee}
                >
                  submit
                </button>
              )}
            </div>
          </div>
          <div className='col-6'>
            <h5 className='mx-md-3 mb-1'>Claim charge fee</h5>

            <div className='form-group mx-3 mb-0'>
              <label htmlFor='name'>Total fund</label>
              {/* <h4 htmlFor='name' className='m-0 pt-3'>0.002</h4> */}
            </div>
            {isLoading3 ? (
              <div className='spinner-border' role='status'>
                <span className='visually-hidden'></span>
              </div>
            ) : (
              <button
                className='btn btn-primary active mt-4 '
                onClick={_claimChargeFee}
              >
                Claim
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
