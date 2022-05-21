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

import {Approve} from '../Components/Approve'

export const Mint = () => {
    const [uri, setUri] = useState("");

    const { account } = useEthers()
    const optiPunkBalance = useTokenBalance(ERC721address, account)
    
    const erc20Contract = new Contract(ERC20address, erc20Interface)
    const { state, send } = useContractFunction(erc20Contract, 'redeemTokens', {transactionName: 'redeemTokens'})
    const { status } = state

    const sendTransaction = (uri) => {
        send(uri)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendTransaction(uri)

      }
    
    return(
        <div className="frame container">
            <h1>Mint</h1>
            <p>Mint the oPunk Token. </p>
            <p>Please make sure to approve the specific NFT that you want to tokenize.</p>

            {optiPunkBalance && (
                <div className="balance">
                <p className="bold">Holding {optiPunkBalance.toString()} OptiPunks</p>
                </div>
            )}

        <Approve />

        <h3>Mint </h3>
        <form onSubmit={handleSubmit}>
                <label>TokenID:</label>
                <input type="number" value={uri} onChange={(e) => setUri(e.target.value)} placeholder="Enter the ID of the optiPunk you want to trade"/>
                <p>Status: {status}</p>
                <input type="submit" className='btn btn-dark' value="Mint oPUNK" />
        </form>

        </div>
    );
}
