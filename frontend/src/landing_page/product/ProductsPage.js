import React from 'react';
import Hero from './Hero';
import UpNavbar from '../UpNavbar';
import LeftComponent from './LeftComponent';
import RightComponents from './RightComponents';
import Footer from '../Footer';
import Universe from './Universe';

function ProductsPage() {
    return ( 
        <>
        
        <Hero/>
        <LeftComponent imageURL="Media/kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="https://kite-demo.zerodha.com/" learnMore="https://zerodha.com/products/kite"  googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3" appleStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802" />
        <RightComponents imageURL="Media/console.png" productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."  learnMore="https://zerodha.com/products/console"/>
        <LeftComponent imageURL="Media/Coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." coin="https://coin.zerodha.com/"  googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3" appleStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802" />
        <RightComponents imageURL="Media/kiteconnect.png" productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." kiteConnect="https://kite.trade/"/>
        <LeftComponent imageURL="Media/varsity.png" productName="Varsity" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3" appleStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802" />
        <p className='text-center fs-5 text-muted'>Want to know more about our technology stack? Check out the <a href='https://zerodha.tech/' style={{textDecoration:"none"}}>Zerodha.tech blog</a>.</p>
        <Universe/>
        
        </>
     );
}

export default ProductsPage;