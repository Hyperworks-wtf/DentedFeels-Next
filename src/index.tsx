import React from 'react'
import ReactDOM from 'react-dom'
import { DAppProvider, Rinkeby } from '@usedapp/core'
import App from './App'

const config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
   // [Mainnet.chainId]: process.env.REACT_APP_MAINNET as string,
    [Rinkeby.chainId]: "https://rinkeby.infura.io/v3/9c6faa38a67646b59e602945eed762d5",
  },
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
