import {ApproveERC20} from '../Components/ApproveERC20'
import {DepositETH} from './ExchangeComponents/DepositETH'
import {DepositTokens} from './ExchangeComponents/DepositTokens'
import { WithDrawETH } from './ExchangeComponents/withdrawETH'

// USEDAPP
import {useEthers, useContractFunction, useCall, ERC20Interface, useTokenBalance} from '@usedapp/core'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { Falsy } from "@usedapp/core/dist/esm/src/model/types";
import { formatEther, formatUnits } from '@ethersproject/units'

// ABI & TOKEN ADDRESS
import { erc721Interface } from '../Contracts/IERC721';
import { ERC721address } from '../Contracts/erc721Address';

import { erc20Interface } from '../Contracts/IERC20';
import { ERC20address } from '../Contracts/er20Address';

import {GetExchangeBalance} from './ExchangeComponents/getExchangeBalance'
import {GetExchangeBalanceETH} from './ExchangeComponents/getExchangeBalanceETH'

import { useState } from "react";

export const Wallet = () => {
    
    return(
        <div className='container frame'>
             <h2>Exchange Wallet</h2>
             <p>Before trading on the orderbook exchange you need to deposit some funds</p>

             <p>ETH Exchange balance: 
                 <span className='bold'> <GetExchangeBalanceETH /></span>
            </p>
            
             <p>oPUNK Exchange balance: 
                 <span className='bold'> <GetExchangeBalance /></span>
            </p>


             <div className='row'>
                <div className='col-sm-4'>
                    <ApproveERC20 />
                </div>
                <div className='col-sm-4'>
                    <DepositETH />
                </div>
                <div className='col-sm-4'>
                    <DepositTokens />
                </div>
                <div className='col-sm-4'>
                    <WithDrawETH />
                </div>
             </div>
        </div>
    );
}