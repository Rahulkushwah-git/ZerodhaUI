import React from 'react';

function Hero() {
    return (
        <div className='container p-5 mb-5 mt-5'>
            <div className='row text-center mb-5 p-5'>
                <h1 className='mb-3'>Open a free demat and trading account online</h1>
                <h5 className='mb-3 text-muted'>Start investing brokerage free and join a community of 1.5+ crore investors and traders</h5>
            </div>
            <div className='row'>
                <div className='col-1 mb-5 p-5 text-center'></div>
                <div className='col-5 mb-5 text-center'>
                    <img src='Media/signup.svg' alt='Sign-up illustration' />
                </div>
                <div className='col-4 p-5 mb-5'>
                    <h3>Signup now</h3>
                    <p className='text-muted'>Or track your existing application</p>
                    <div className="input-group mb-3">
                        <span className="input-group-text">+91</span>
                        <input type="text" className="form-control" placeholder="Enter your mobile number" />
                        <button className='p-2 mt-5 btn btn-primary fs-5 mb-2' style={{ width: "80%" }}>Get OTP</button><br />
                        <h6 className='p-2 text-muted fs-12'>By proceeding, you agree to the Zerodha <a style={{ textDecoration: "none" }} href=''>terms</a> & <a style={{ textDecoration: "none" }} href=''>privacy policy</a></h6>
                    </div>
                </div>
                <div className='col-2 mb-5 p-5 text-center'></div>
            </div>
            <h1 className='mb-3 text-center'>Investment options with Zerodha demat account</h1>
            <div className='row mt-5 mb-5 p-5'>
                <div className='col-1 p-2'></div>
                <div className='col-1 p-2'>
                    <img src='./Media/stocks.svg' alt='Stocks' />
                </div>
                <div className='col-1'></div>
                <div className='col-3'>
                    <h4 className='text-muted mb-2 ml-5'>Stocks</h4>
                    <p className='text-muted'>Invest in all exchange-listed securities</p>
                </div>
                <div className='col-1'>
                    <img src='./Media/mf.svg' alt='Mutual Funds' />
                </div>
                <div className='col-1'></div>
                <div className='col-3 p-2'>
                    <h4 className='text-muted'>Mutual funds</h4>
                    <p className='text-muted'>Invest in commission-free direct mutual funds</p>
                </div>
                <div className='col-1 p-2'></div>
                <div className='row mt-5'></div>
                <div className='col-1 p-2'></div>
                <div className='col-1 p-2'>
                    <img src='./Media/ipo.svg' alt='IPO' />
                </div>
                <div className='col-1'></div>
                <div className='col-3'>
                    <h4 className='text-muted mb-2 ml-5'>IPO</h4>
                    <p className='text-muted'>Invest in all exchange-listed securities</p>
                </div>
                <div className='col-1'>
                    <img src='./Media/fo.svg' alt='Futures & Options' />
                </div>
                <div className='col-1'></div>
                <div className='col-3 p-2'>
                    <h4 className='text-muted'>Futures & options</h4>
                    <p className='text-muted'>Invest in commission-free direct mutual funds</p>
                </div>
                <div className='col-1 p-2'></div>
                <div className='text-center'>
                    <button className='p-2 mt-5 btn btn-primary fs-5 mb-2 text-center' style={{ width: "30%" }}>Explore Investments</button><br />
                </div>
            </div>
            <section className="container-fluid " id='signupHero'>
                <div className="p-3 m-3 content-center " id='signupWrapper'>
                    <h2 className='mt-5 mb-5 '>Steps to open a demat account with Zerodha</h2>
                </div>
                <div className='row p-5'>
                    <div className='col-6'>
                        <img src='./Media/steps.svg' alt="Steps illustration" />
                    </div>
                    <div className='col-6 p-5'>
                        <ol style={{ height: "100%" }}>
                            <li className='bottom-border mt-3 mb-3'>Enter the requested details</li>
                            <li className='bottom-border mt-3 mb-3'>Complete e-sign & verification</li>
                            <li className='mt-3 mb-3'>Start investing!</li>
                        </ol>
                    </div>
                </div>
                {/* Benefits Section */}
                <div className='row benefits p-5'>
                    <div className='col-6'>
                        <img style={{width:"80%"}} src='./Media/benefits.svg' alt="Benefits illustration" />
                        <h3 className='text-center'>Benefits of opening a Zerodha demat account</h3>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <h4>Unbeatable pricing</h4>
                            <p>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                        </div>
                        <div className='row'>
                            <h4>Best investing experience</h4>
                            <p>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                        </div>
                        <div className='row'>
                            <h4>No spam or gimmicks</h4>
                            <p>Committed to transparency — no gimmicks, spam, “gamification”, or intrusive push notifications.</p>
                        </div>
                        <div className='row'>
                            <h4>The Zerodha universe</h4>
                            <p>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
