import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(250, 250, 250)"}}>
        <div className='container  border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                <img className='mb-3' src={`${process.env.PUBLIC_URL}/Media/logo.svg`} style={{width:"60%"}} alt='Logo'/>
                <p className='text-muted'>&copy; 2010 - 2024, Zerodha Broking Ltd.All rights reserved.</p>
                </div>
                <div className='col'>
                    <p>Company</p>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="http://localhost:3000/about_page">About</a><br/>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="http://localhost:3000/product">Products</a><br/>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="http://localhost:3000/pricing">Pricing</a><br/>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="">Referral programme</a><br/>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="">Careers</a><br/>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="">Zerodha.tech</a><br/>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="">Press & media</a><br/>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="">Zerodha Cares (CSR)</a><br/>
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="">Contact us</a><br/>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="">Support portal</a><br/>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="">Z-Connected</a><br/>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="">List of charges</a><br/>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="">Download & resources</a><br/>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="">Videos</a><br/>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="">Market overview</a><br/>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="">How to file a complaint?</a><br/>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="">Status of your complaint</a><br/>
                </div>
                <div className='col'>
                    <p>Account</p>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="">Open an account</a><br/>
                    <a className='text-muted mb-2' style={{textDecoration:"none"}} href="">Fund transfer</a><br/>
                </div>
            </div>
            <div className='mt-5  text-muted' style={{fontSize:"12px"}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='complaints@zerodha.com'style={{textDecoration:"none"}}>complaints@zerodha.com</a>, for DP related to <a href='dp@zerodha.com'style={{textDecoration:"none"}}>dp@zerodha</a>.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            <p>Procedure to file a complaint on <a href='https://scores.sebi.gov.in/'style={{textDecoration:"none"}}>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
            <p><a href=''style={{textDecoration:"none"}}>Smart Online Dispute Resolution</a> | <a href=''style={{textDecoration:"none"}}>Grievances Redressal Mechanism</a></p>
            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
            <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href='https://support.zerodha.com/category/your-zerodha-account/your-profile/articles/how-do-i-place-a-complaint-at-zerodha' style={{textDecoration:"none"}}>create a ticket here</a>.</p>
            </div>
            <div className='text-center ' style={{fontSize:"12px"}}>
                <a className='text-muted mt-5 mb-5 mx-3' style={{textDecoration:"none"}} href="">NSE</a>
                <a className='text-muted mt-5 mb-5 mx-3' style={{textDecoration:"none"}} href="">BSE</a>
                <a className='text-muted mt-5 mb-5 mx-3' style={{textDecoration:"none"}} href="">MCX</a>
                <a className='text-muted mt-5 mb-5 mx-3' style={{textDecoration:"none"}} href="">Terms & conditions </a>
                <a className='text-muted mt-5 mb-5 mx-3' style={{textDecoration:"none"}} href="">Policies & procedures</a>
                <a className='text-muted mt-5 mb-5 mx-3' style={{textDecoration:"none"}} href="">Privacy policy</a>
                <a className='text-muted mt-5 mb-5 mx-3' style={{textDecoration:"none"}} href="">Disclosure</a>
                <a className='text-muted mt-5 mb-5 mx-3' style={{textDecoration:"none"}} href="">For investor's attention </a>
                <a className='text-muted mt-5 mb-5 mx-3' style={{textDecoration:"none"}} href="">Investor charter</a>
            </div>
            
        </div>
        </footer>
     );
}

export default Footer;