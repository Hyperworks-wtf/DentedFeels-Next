import React, { useEffect } from 'react';
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useContractCall, useContractFunction, useEthers } from '@usedapp/core';
import '../styles/globals.css'
import erc721Abi from '../abi/DentedAbi.json';
import toast from 'react-hot-toast';

type mintButtonProps = {
  children: string | React.ReactElement;
  primary?: boolean;
  link?: boolean;
  amount: number;
  onClick?: () => void;
}

const MintButton = (props: mintButtonProps) => {
  const { account } = useEthers();
  const mintInterface = new utils.Interface(erc721Abi);
  const mintContractAddress = '0x3f0a726f9166c7fab98a0c55bf2b00b154b7c696' 
  const contract = new Contract(mintContractAddress, mintInterface)
  const { send, state } = useContractFunction(contract, 'mint')
  const [checkPrice]: any = useContractCall({
    abi: mintInterface,
    address: mintContractAddress,
    method: "tokenPrice",
    args: [],
  }) ?? [];


  useEffect(() => {
    console.log(checkPrice)
  }, [checkPrice])

  const onMint = async () => {
    console.log('account in mint', account);

    if (account) await send(props.amount, { value: utils.parseEther( (props.amount * 0.11).toString())});
    if (!account) toast.error('Please connect to your wallet')
  }

  useEffect(() => {
    console.log(state)
    if (state.status.toString() === "Exception") {
    toast(state.errorMessage?.split(":")[1] || '', { duration : 3000})
    } else if (state.status.toString() === "Success") {
      toast('Minted successfully', { duration : 3000})
    } else if (state.status.toString() === "Mining") {
      toast(`Transaction: ${state.transaction?.hash}`, { duration : 5000})
    }
  }, [state])

  return (
    <div className='df-mint-btn'
      onClick={() => onMint()}
      {...props}
    />
  );
}

export default MintButton;