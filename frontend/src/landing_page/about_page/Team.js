import React from 'react';

function Team() {
    return ( 
        <div className='container border-top'>
            <div className='row'>
                <div className='col p-5 mt-5 mb-5 text-muted text-center'>
                    <img src='Media/RahulKushwah.jpeg'style={{width:"50%",borderRadius:"50%"}}/>
                    <h3>Rahul Kushwah</h3>
                    <p>Developer</p>
                </div>
                <div className='col p-5 mt-5 mb-5'>
                    <h1 className='mb-5'>People</h1>
                    <p className='mt-3'>Rahul bootstrapped and Developed Zerodha clone in 2024 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha clone  has changed the landscape of Rahul trading strategy.</p>
                    <p className='mt-3'>He is a Graduated from Madhav Institute of Technology and Science, In Internet of Things and having command on vsrious tech like AI & Machine Learning, Data Science, Data Analysis, Database Management, Full-stack Developer.</p>
                    <p className='mt-3'>Playing badminton and basketball is his zen.</p>
                    <p className='mt-3'>Connect on <a href='' style={{textDecoration:"none"}}>Homepage</a> / <a href='' style={{textDecoration:"none"}}>TradingQnA</a> / <a href='https://www.linkedin.com/in/rahul-kushwah-611b90235/' style={{textDecoration:"none"}}><i class="fa fa-linkedin-square" aria-hidden="true">RahulKushwah</i></a> / <a href='https://github.com/Rahulkushwah-git' style={{textDecoration:"none"}}><i class="fa fa-github" aria-hidden="true">RahuKushwah</i></a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;
