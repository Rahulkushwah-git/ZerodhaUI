import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5 mt-5'>
            <div className='row text-center border-bottom mb-5 p-5 text-muted'>
                <h1 className='mb-3'>Zerodha Products</h1>
                <h5 className='mb-3'>Sleek, modern, and intuitive trading platforms</h5>
                <p className='mb-5'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero
