import React from 'react';

function Brokerages() {
    return (
        <div className='container'>
            <h5 className='p-5 mt-5 text-center ' ><a href='https://zerodha.com/brokerage-calculator'style={{textDecoration:"none"}}>Calculate your costs upfront</a> using our brokerage calculator</h5>
            <div className='row'>    
                <div className='col-1'></div>
                <div className='col-11 mb-5' ><h3 className='ml-5 text-muted' > Charges explained</h3></div>
                <div className='col-1'></div>
                <div className='col-5 text-muted 'style={{fontSize:"12px", lineHeight:"1.5"}}>
                    <h5 className='p-1 mt-1 '>Securities/Commodities transaction tax</h5>
                    <p className='p-1 mt-1 '>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                    <p className='p-1 mt-1 '> When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                    <h5 className='p-1 mt-1 '>Transaction/Turnover Charges</h5>
                    <p className='p-1 mt-1 '>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                    <p className='p-1 mt-1 '>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                    <p className='p-1 mt-1 '>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                    <p className='p-1 mt-1 '>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                    <p className='p-1 mt-1 '>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                    <h5 className='p-1 mt-1 '>Call & trade</h5>
                    <p className='p-1 mt-1 '>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                    <h5 className='p-1 mt-1 '>Stamp charges</h5>
                    <p className='p-1 mt-1 '>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                    <h5 className='p-1 mt-1 '>NRI brokerage charges</h5>
                    <ul className='p-1 mt-1 '>
                        <li>₹100 per order for futures and options.</li>
                        <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    </ul>
                    <h5 className='p-1 mt-1 '>Account with debit balance</h5>
                    <p className='p-1 mt-1 '>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                    <h5 className='p-1 mt-1 '>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
                    <ul className='p-1 mt-1 '>
                        <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                    </ul>

                </div>
                <div className='col-5 text-muted ' style={{fontSize:"12px", lineHeight:"1.5"}}>
                    <h5 className='p-1 mt-1 '>GST</h5>
                    <p className='p-1 mt-1 '>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                    <h5 className='p-1 mt-1 '>SEBI Charges</h5>
                    <p className='p-1 mt-1 '> Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                    <h5 className='p-1 mt-1 '>DP (Depository participant) charges</h5>
                    <p className='p-1 mt-1 '>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                    <p className='p-1 mt-1 '>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                    <p className='p-1 mt-1 '>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                    <h5 className='p-1 mt-1 '>Pledging charges</h5>
                    <p className='p-1 mt-1 '>₹30 + GST per pledge request per ISIN.</p>
                    <h5 className='p-1 mt-1 '>AMC (Account maintenance charges)</h5>
                    <p className='p-1 mt-1 '>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href='https://support.zerodha.com/category/account-opening/offline-account-opening/bsda/articles/how-to-open-a-basic-service-demat-account-at-zerodha'>Click here</a></p>
                    <p className='p-1 mt-1 '>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href='https://support.zerodha.com/category/account-opening/charges-at-zerodha/statutory-and-exchange/articles/what-is-the-annual-maintenance-charge'>Click here</a></p>
                    <h5 className='p-1 mt-1 '>Corporate action order charges</h5>
                    <p className='p-1 mt-1 '>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
                    <h5 className='p-1 mt-1 '>Off-market transfer charges</h5>
                    <p className='p-1 mt-1 '>₹25 or 0.03% of the transfer value (whichever is higher).</p>
                    <h5 className='p-1 mt-1 '>Physical CMR request</h5>
                    <p className='p-1 mt-1 '>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
                    <h5 className='p-1 mt-1 '>Payment gateway charges</h5>
                    <p className='p-1 mt-1 '>₹9 + GST (Not levied on transfers done via UPI)</p>
                    <h5 className='p-1 mt-1 '>Delayed Payment Charges</h5>
                    <p>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href='https://support.zerodha.com/category/console/ledger/articles/interest-charges'>Learn more</a>.</p>
                </div>
                <div className='col-1'></div>
                <div className='col-1'></div>
                <div className='col-10 small-text' style={{fontSize:"14px"}}>
                    <h5 className='p-1 text-muted small-tex'>Disclaimer</h5>
                    <p className='p-1 mt-1' style={{fontSize:"12px",lineHeight:"1.5"}}> For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
                    <h3 className='p-1 mt-5 text-muted '>Charges for account opening</h3>
                    <div className=' p-1 mb-5 mt-1'>
                        <table class="table table-striped tale-border" style={{lineHeight:"1.8"}}>
                            <thead>
                                <tr>
                                    <th scope="col">Type of account</th>
                                    <th scope="col">Charges</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Online account</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>Offline account</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>NRI account (offline only)</td>
                                    <td>₹ 500</td>
                                </tr>
                                <tr>
                                    <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                    <td>₹ 500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className='text-muted'>Charges for optional value added services</h3>
                    <div className='p-1 mt-5 mb-5'>
                        <table class="table table-bordered table-striped p-5" style={{lineHeight:"1.8"}}>
                            <thead>
                                <tr>
                                    <th scope="col">Service</th>
                                    <th scope="col">Billing Frquency</th>
                                    <th scope="col">Charges</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tickertape</td>
                                    <td>Monthly / Annual</td>
                                    <td>Free: 0 | Pro: 249/2399</td>
                                </tr>
                                <tr>
                                    <td>Smallcase</td>
                                    <td>Per transaction</td>
                                    <td>Buy & Invest More: 100 | SIP: 10</td>
                                </tr>
                                <tr>
                                    <td>Kite Connect</td>
                                    <td>Monthly</td>
                                    <td>Connect: 2000 | Historical: 2000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div className='col-1'></div>

        </div>
    );
}

export default Brokerages;