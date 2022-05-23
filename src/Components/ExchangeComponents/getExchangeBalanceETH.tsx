// USEDAPP
import {useEthers, useContractFunction, useCall, ERC20Interface, useTokenBalance} from '@usedapp/core'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { Falsy } from "@usedapp/core/dist/esm/src/model/types";
import { formatEther, formatUnits } from '@ethersproject/units'

// ABI & TOKEN ADDRESS
import { erc721Interface } from '../../Contracts/IERC721';
import { ERC721address } from '../../Contracts/erc721Address';

import { erc20Interface } from '../../Contracts/IERC20';
import { ERC20address } from '../../Contracts/er20Address';

import { useState } from "react";

import {Approve} from '../../Components/Approve'

import { ExchangeAddress} from '../../Contracts/exchangeAddress';
import { IExchange } from '../../Contracts/IExchange';

function useGetExchangeETHBalance(
    address: string | Falsy,
    ticker: string | Falsy
  ) {
    const { value, error } =
      useCall(
        address &&
        ExchangeAddress && {
            contract: new Contract(ExchangeAddress, IExchange), // instance of called contract
            method: "balances", // Method to be called
            args: [address, ticker], // Method arguments - address to be checked for balance
          }
      ) ?? {};
    if(error) {
      console.error(error.message)
      return undefined
    }
    return value?.[0].toString() 
  }


export const GetExchangeBalanceETH = () => {
    const { account } = useEthers()

    const tokenBalance = useGetExchangeETHBalance(account, "ETH")
    
    return(
        <>
        {Number(tokenBalance)}
        </>
        
    );
}
