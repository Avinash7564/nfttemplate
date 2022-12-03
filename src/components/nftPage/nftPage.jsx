import React from 'react'
import OrbitansDetails from './orbitansDetails'
import './nftPage.css';

function NftPage() {
    return (
      <React.Fragment>
        <div className="nftpage-image-holder"></div>
        <div className='nft-page-details-section'>
            <OrbitansDetails />
        </div>
      </React.Fragment>
  )
}

export default NftPage