import React from 'react';

function Education() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src={`${process.env.PUBLIC_URL}Media/education.svg`} alt="image" style={{width:"90%"}}/>
                </div>
                <div className='col-6'>
                    <h1 className='mb-3'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a className='mb-3 mt-3' href="">Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mb-3 mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="">TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;