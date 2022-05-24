// USEDAPP
import {useEthers, useContractFunction, useSendTransaction, useCall, ERC20Interface, useTokenBalance} from '@usedapp/core'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { Falsy } from "@usedapp/core/dist/esm/src/model/types";
import { formatEther, formatUnits} from '@ethersproject/units'

// ABI & TOKEN ADDRESS
import { erc721Interface } from '../../Contracts/IERC721';
import { ERC721address } from '../../Contracts/erc721Address';

import { erc20Interface } from '../../Contracts/IERC20';
import { ERC20address } from '../../Contracts/er20Address';
import { ExchangeAddress} from '../../Contracts/exchangeAddress';
import { IExchange } from '../../Contracts/IExchange';

import { useState } from "react";

export const DepositETH = (props) => {
    const [uri, setUri] = useState("");

    const { account } = useEthers()

    const { sendTransaction, state } = useSendTransaction()
    const status = state.status

    const send = (uri) => {
        console.log(uri * 1e18)
        sendTransaction({ to: ExchangeAddress, value: 1})
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        send(uri)
      }


    return(
        <div className='container frame'>
            <h3>Deposit ETH</h3>
            <form onSubmit={handleSubmit}>
                <label>Deposit ETH:</label>
                <input type="number" value={uri} onChange={(e) => setUri(e.target.value)} placeholder="Enter the Amount of tokens you want to approve"/>
                <input type="submit" className='btn btn-dark' value="Deposit" />
            </form>
            <p>Status: {status}</p>

        </div>
    );
}
