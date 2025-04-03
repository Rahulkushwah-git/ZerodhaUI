import React from 'react';

function RightComponents({ imageURL, productName, productDescription, tryDemo, learnMore, coin, kiteConnect, googlePlay, appleStore, }) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-4'>
                    <h1 className='mb-5'>{productName}</h1>
                    <p className='mb-5'>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none" , marginLeft:"20%"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={kiteConnect} style={{textDecoration:"none" , marginLeft:"20%"}}>Kite Connect <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-1'></div>
                <div className='col-5'>
                    <img src={process.env.PUBLIC_URL + imageURL} alt="image"/>
                </div>

            </div>
        </div>
     );
}

export default RightComponents;