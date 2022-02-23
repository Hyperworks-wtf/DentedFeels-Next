import React from 'react'
import { useEthers, shortenAddress, useLookupAddress } from '@usedapp/core'
import '../styles/globals.css'

export const AccountButton = () => {
  const { account, deactivate, activateBrowserWallet } = useEthers()
  const ens = useLookupAddress()


  const activate = async () => {
    activateBrowserWallet()
  }

  return (
    <div>
      {account ? (
        <div>
          <div className='df-connect-btn' onClick={() => deactivate()}>{ens ?? shortenAddress(account)}</div>
        </div>
      ) : (
        <div className='df-connect-btn'onClick={activate}>Connect</div>
      )}
    </div>
  )
}

