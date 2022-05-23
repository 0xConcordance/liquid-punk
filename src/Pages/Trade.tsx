import {Chart} from '../Components/Chart'
import {ApproveERC20} from '../Components/ApproveERC20'

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

import { useState } from "react";

import {Wallet} from '../Components/Wallet'

export const Trade = () => {

    const { account } = useEthers()
    const oPunkBalance = useTokenBalance(ERC20address, account)

    return(
        <div className="container">
            <h1>Trade</h1>
            <p>Order book exchange for trading oPUNK/ETH. Coming Soon</p>

            {oPunkBalance && (
                <div className="balance container">
                <p className="">Holding <span className='bold'> {formatEther(oPunkBalance)} </span>oPUNK Tokens.</p>
                </div>
            )}

            <Wallet />

            <div className='frame' hidden>
                <h2>Trade</h2>
                <div className='row'>
                    <div className='col-8'>
                        <Chart />

                    </div>
                    <div className='col-4'>

                    </div>
                </div>
            </div>


        </div>
    );
}