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

export const Redeem = () => {
    const [uri, setUri] = useState("");

    const { account } = useEthers()
    const oPunkBalance = useTokenBalance(ERC20address, account)
    
    const erc20Contract = new Contract(ERC20address, erc20Interface)
    const { state, send } = useContractFunction(erc20Contract, 'redeemOptiPunk', {transactionName: 'redeemOptiPunk'})
    const { status } = state

    const sendTransaction = (uri) => {
        send(uri)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendTransaction(uri)

      }

    return(
        <div className="container">
            <h1>Redeem</h1>
            <p>Redeem an Optipunk for 100 oPUNK. 
                You can find all available NFTs 
                 <a href='https://quixotic.io/0xec4CA2Ac3889A79C3d9ceE2D39Bba5febC6265af'> here.</a>
            </p>
            
            {oPunkBalance && (
                <div className="balance container">
                <p className="">Holding <span className='bold'> {formatEther(oPunkBalance)} </span>oPUNK Tokens.</p>
                </div>
            )}

        <div className='container frame'>
        <h3>Redeem</h3>
        <form onSubmit={handleSubmit}>
                <label>TokenID:</label>
                <input type="number" value={uri} onChange={(e) => setUri(e.target.value)} placeholder="Enter the ID of the optiPunk you want to redeem"/>
                <input type="submit" className='btn btn-dark'/>
            </form>
            <p>Status: {status}</p>
        </div>        
        </div>
    );
}
