import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row p-5'>
                <h1 className='text-center  mt-5'>Charges</h1>
                <p className='text-center text-muted mb-5 '>List of all charges and taxes</p>
                <div className='col text-center mt-5'>
                    <img src={process.env.PUBLIC_URL + 'Media/pricing0.svg'} style={{width:"60%"}}/>
                    <h2 className='mb-4'>Free equity delivery</h2>
                    <p className='text-small text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col text-center mt-5'>
                    <img src={process.env.PUBLIC_URL + 'Media/other-trades.svg'} style={{width:"60%"}} />
                    <h2 className='mb-4'>Intraday and F&O trades</h2>
                    <p className='text-small text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col text-center mt-5 '>
                    <img src={process.env.PUBLIC_URL + 'Media/pricingMF.svg '} alt="image" style={{width:"60%"}} />
                    <h2 className='mb-4'>Free direct MF</h2>
                    <p className='text-small text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;