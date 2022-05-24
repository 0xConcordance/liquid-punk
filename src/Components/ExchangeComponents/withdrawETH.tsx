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

export const WithDrawETH = () => {
    const [uri, setUri] = useState("");

    const { account } = useEthers()

    const exchangeContract = new Contract(ExchangeAddress, IExchange)
    const { state, send } = useContractFunction(exchangeContract, 'withdrawEth', {transactionName: 'withdrawEth'})
    const { status } = state

    const sendTransaction = (uri) => {
        send(Number(uri) * 1e18)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendTransaction(uri)

      }

    return (
        <div className='frame'>
            <h3>Withdraw ETH</h3>
            <form onSubmit={handleSubmit}>
                <label>Withdraw ETH from exchange wallet:</label>
                <input type="number" value={uri} onChange={(e) => setUri(e.target.value)} placeholder="Enter amount..."/>
                <p>Status: {status}</p>
                <input type="submit" className='btn btn-dark' value="Withdraw"/>
            </form>

        </div>
    );
}