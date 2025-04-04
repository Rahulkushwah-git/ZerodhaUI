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
        <LeftComponent  />
        <RightComponents />
        <Universe/>
        
        </>
     );
}

export default ProductsPage;