import React from 'react';

import { getDefaultProvider, utils } from 'ethers'
import { ChainId, DAppProvider, OptimismKovan, Rinkeby, useEthers , Optimism} from '@usedapp/core';

import {BrowserRouter, Route, Routes} from "react-router-dom"

import {Home} from './Pages/Home'
import {Navbar} from './Components/Navbar'
import {Mint} from './Pages/Mint'
import {Redeem} from './Pages/Redeem'
import {Trade} from './Pages/Trade'

function App() {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Optimism],
      readOnlyChainId: ChainId.Optimism,
      readOnlyUrls: {
        [Optimism.chainId]: "https://mainnet.optimism.io",
      },
    }}>

    <div className="container">

       <Navbar /> 
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/mint' element={ <Mint /> }/>
          <Route path='/redeem' element={ <Redeem /> }/>
          <Route path='/trade' element={ <Trade /> }/>

        </Routes>

    </div>

    </DAppProvider>

  );
}

export default App;
