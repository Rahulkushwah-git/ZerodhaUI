import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='Media/largestBroker.svg' alt="image"></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                        <h1>Largest stock broker in India</h1>
                        <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all ratail order volumes in India by trading and investing in:</p>
                        <div className='row'>
                            <div className='col-6'>
                                <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commmodity and derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                                </ul>
                            </div>
                            <div className='col-6 '>
                                <ul>
                                    <li>
                                        <p>Stock & IPOs</p>
                                    </li>
                                    <li>
                                        <p>Direct Mutual Funds</p>
                                    </li>
                                    <li>
                                        <p>Bonds and Govt. Securities</p>
                                    </li>
                                </ul>
                            </div>
                            <img src={process.env.PUBLIC_URL + "Media/pressLogos.png"} alt="image" style={{width:"90%"}}/>
                        </div>
                </div>
            </div>
        </div>

     );
}

export default Awards;