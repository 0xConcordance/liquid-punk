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

export const Approve = (props) => {
    const [uri, setUri] = useState("");

    const { account } = useEthers()
    
    const erc721Contract = new Contract(ERC721address, erc721Interface)
    const { state, send } = useContractFunction(erc721Contract, 'approve', {transactionName: 'approve'})
    const { status } = state

    const sendTransaction = (uri) => {
        send(ERC20address, uri)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendTransaction(uri)

      }

    return(
        <div className='container frame'>
            <h3>Approve an Optipunk</h3>
            <form onSubmit={handleSubmit}>
                <label>Enter Token ID:</label>
                <input type="number" value={uri} onChange={(e) => setUri(e.target.value)} placeholder="Enter the ID of the optiPunk you want to approve"/>
                <p>Status: {status}</p>
                <input type="submit" className='btn btn-dark' value="Approve"/>
            </form>

        </div>
    );
}
