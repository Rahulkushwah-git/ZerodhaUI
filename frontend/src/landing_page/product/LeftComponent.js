import React from 'react';


function LeftComponent() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-1 mb-5 p-5 text-centter'></div>
                <div className='col-5 mb-5 text-center'>
                    <img src={`${process.env.PUBLIC_URL}/Media/signup.svg`} alt='Sign-up illustration' />
                </div>
                <div className='col-1'></div>
                <div className='col-4 p-5 mb-5'>
                    <h2>Kite</h2>
                    <p>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <a href="https://<username>.github.io/zerodhaUI-dashboard" style={{ textDecoration: "none" }}>Try demo </a>
                            <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                        </div>
                        <div className='col-6'>
                            <a href='' style={{ textDecoration: "none" }}>Learn more </a>
                            <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6 '>
                            <img src={`${process.env.PUBLIC_URL}/Media/googlePlayBadge.svg`} alt='Sign-up illustration' />
                        </div>
                        <div className='col-6'>
                            <img src={`${process.env.PUBLIC_URL}/Media/appstoreBadge.svg`} alt='Sign-up illustration' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-1 mb-5 p-5 text-centter'></div>
                <div className='col-4 p-5 mb-5'>
                    <h2>Console</h2>
                    <p>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <a href='' style={{textDecoration: "none"}}>Learn more </a>
                            <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    
                </div>
                <div className='col-1'></div>
                <div className='col-5 mb-5 text-center'>
                    <img src={`${process.env.PUBLIC_URL}/Media/console.png`} alt='Sign-up illustration' />
                </div>
                </div>

            <div className='row'>
                <div className='col-1 mb-5 p-5 text-centter'></div>
                <div className='col-5 mb-5 text-center'>
                    <img src={`${process.env.PUBLIC_URL}/Media/coin.png`} alt='Sign-up illustration' />
                </div>
                <div className='col-1'></div>
                <div className='col-4 p-5 mb-5'>
                    <h2>Coin</h2>
                    <p>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <a href='' style={{ textDecoration: "none" }}>Coin </a>
                            <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-6 '>
                            <img src={`${process.env.PUBLIC_URL}/Media/googlePlayBadge.svg`} alt='Sign-up illustration' />
                        </div>
                        <div className='col-6'>
                            <img src={`${process.env.PUBLIC_URL}/Media/appstoreBadge.svg`} alt='Sign-up illustration' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-1 mb-5 p-5 text-centter'></div>
                <div className='col-4 p-5 mb-5'>
                    <h2>Kite Connect API</h2>
                    <p>Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <a href='' style={{textDecoration: "none"}}>Kite Connect </a>
                            <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    
                </div>
                <div className='col-1'></div>
                <div className='col-5 mb-5 text-center'>
                    <img src={`${process.env.PUBLIC_URL}/Media/kiteconnect.png`} alt='Sign-up illustration' />
                </div>
                </div>



            <div className='row'>
                <div className='col-1 mb-5 p-5 text-centter'></div>
                <div className='col-5 mb-5 text-center'>
                    <img src={`${process.env.PUBLIC_URL}/Media/varsity.png`} alt='Sign-up illustration' />
                </div>
                <div className='col-1'></div>
                <div className='col-4 p-5 mb-5'>
                    <h2>Varsity mobile</h2>
                    <p>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
                    <div className='row mt-4'>
                        <div className='col-6 '>
                            <img src={`${process.env.PUBLIC_URL}/Media/googlePlayBadge.svg`} alt='Sign-up illustration' />
                        </div>
                        <div className='col-6'>
                            <img src={`${process.env.PUBLIC_URL}/Media/appstoreBadge.svg`} alt='Sign-up illustration' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftComponent;
