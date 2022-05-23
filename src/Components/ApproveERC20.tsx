// USEDAPP
import {useEthers, useContractFunction, useCall, ERC20Interface, useTokenBalance} from '@usedapp/core'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { Falsy } from "@usedapp/core/dist/esm/src/model/types";
import { formatEther, formatUnits} from '@ethersproject/units'

// ABI & TOKEN ADDRESS
import { erc721Interface } from '../Contracts/IERC721';
import { ERC721address } from '../Contracts/erc721Address';

import { erc20Interface } from '../Contracts/IERC20';
import { ERC20address } from '../Contracts/er20Address';

import { ExchangeAddress} from '../Contracts/exchangeAddress';
import { IExchange } from '../Contracts/IExchange';

import { useState } from "react";

export const ApproveERC20 = (props) => {
    const [uri, setUri] = useState("");

    const { account } = useEthers()
    
    const erc20Contract = new Contract(ERC20address, erc20Interface)
    const { state, send } = useContractFunction(erc20Contract, 'approve', {transactionName: 'approve'})
    const { status } = state

    const sendTransaction = (uri) => {
        send(ExchangeAddress, uri)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendTransaction(uri)

      }

    return(
        <div className='container frame'>
            <h3>Approve Tokens</h3>
            <form onSubmit={handleSubmit}>
                <label>Number of approved Tokens:</label>
                <input type="number" value={uri} onChange={(e) => setUri(e.target.value)} placeholder="Enter the Amount of tokens you want to approve"/>
                <p>Status: {status}</p>
                <input type="submit" className='btn btn-dark' value="Approve"/>
            </form>

        </div>
    );
}
