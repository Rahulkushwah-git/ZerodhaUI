import React from 'react';

function Universe() {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center text-muted mt-5 mb-4 '>The Zerodha Universe</h1>
                <p className='text-center text-muted  mb-5 '>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-1'></div>
                <div className='col-3 mt-5 mb-5 p-5 text-center  '>
                    <a href='https://www.zerodhafundhouse.com/' style={{ textDecoration: "none" }}><img src={`${process.env.PUBLIC_URL}Media/zerodhaFundhouse.png`} alt="image" style={{ width: "50%" }} /></a>
                    <p className='text-small text-muted mt-5 mb-5'>Our asset management venture that is creating simple and transparent indexfunds to help you save for your goals.</p>
                    <a className='mt-5' href='https://streak.tech/' style={{ textDecoration: "none" }}><img src={`${process.env.PUBLIC_URL}Media/streakLogo.png`} alt="image" style={{ width: "50%" }} /></a>
                    <p className='text-small text-muted mt-5'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className='col-4 mt-5 mb-5 p-5 text-center text-muted '>
                    <a href='https://sensibull.com/' style={{ textDecoration: "none" }}><img src={`${process.env.PUBLIC_URL}Media/sensibullLogo.svg`} alt="image" style={{ width: "50%" }} /></a>
                    <p className='text-small text-muted mt-5 mb-5'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    <a className='mt-5' href='https://smallcase.zerodha.com/' style={{ textDecoration: "none" }}><img src={`${process.env.PUBLIC_URL}Media/smallcaseLogo.png`} alt="image" style={{ width: "50%" }} /></a>
                    <p className='text-small text-muted mt-5'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                <div className='col-3 mt-5 mb-5 p-5 text-center'>
                    <a href='https://www.tijorifinance.com/' style={{ textDecoration: "none" }}><img src={`${process.env.PUBLIC_URL}Media/tijori.svg`} alt="image" style={{ width: "50%" }} /></a>
                    <p className='text-small text-muted mt-5 mb-5'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                    <a className='mt-5' href='https://joinditto.in/' style={{ textDecoration: "none" }}><img src={`${process.env.PUBLIC_URL}Media/dittoLogo.png`} alt="image" style={{ width: "50%" }} /></a>
                    <p className='text-small text-muted mt-5'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className='col-1'></div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "20%", margin: "0 auto" }}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;