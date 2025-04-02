import React from 'react';

function Hero() {
    return (
        <section className="container-fluid" id='supportHero'>
            <div className=" p-3 " id='supportWrapper'>
                <h4>Support portal</h4>
                <a href='' style={{ textDecoration: "none" }}>Track Tickets</a>
            </div>
            <div className='row p-5 m-3 '>
                <div className='col-6 p-5'>
                    <h1  className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' ></input><br/>
                    <a href='' style={{lineHeight:"2.5"}}>Track account opening </a>
                    <a href='' style={{lineHeight:"2.5"}}>Track segment activation </a>
                    <a href='' style={{lineHeight:"2.5"}}>Intraday margins </a>
                    <a href='' style={{lineHeight:"2.5"}}>Kite user manual</a>
                </div>
                <div className='col-6 p-5 '>
                    <h4 className='fs-3'>Featured</h4>
                    <ol>
                        <li><a href='' style={{lineHeight:"2.5"}}>MCX is launching Gold Ten (10 gram) futures contracts </a></li>
                        <li><a href='' style={{lineHeight:"2.5"}}>Current Buybacks - March 2025 </a></li>
                    </ol>
                </div>
            </div>
        </section>

    );
}

export default Hero
