import React from 'react';

function LeftComponent({ imageURL, productName, productDescription, tryDemo, learnMore, coin, kiteConnect, googlePlay, appleStore, }) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-5 p-3'>
                    <img src={imageURL} />
                </div>
                <div className='col-1'></div>
                <div className='col-4 p-5 mb-5 mt-5'>
                    <h1 className='mb-5'>{productName}</h1>
                    <p className='mb-5'>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none" , marginRight:"20%"}}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{textDecoration:"none" , marginLeft:"20%"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div>
                        <a href={coin} style={{textDecoration:"none" , marginRight:"20%"}}>Coin <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={googlePlay} style={{textDecoration:"none" , marginRight:"10%"}}><img src="Media/googlePlayBadge.svg" /></a>
                        <a href={appleStore} style={{textDecoration:"none" , marginLeft:"10%"}}><img src="Media/appstoreBadge.svg" /></a>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    );
}

export default LeftComponent;
