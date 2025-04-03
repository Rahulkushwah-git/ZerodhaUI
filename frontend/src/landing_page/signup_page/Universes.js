import React from 'react';

function Universes() {
    return (
        <div className='container'>
            <h2 className='text-center'>Explore different account types </h2>
            <div className='row account-types'>
                <div className='col-1'></div>
                <div className="col-3 card account-type">
                    <div className="row no-gutters">
                        <div className="col-3">
                            <img src={process.env.PUBLIC_URL + "./Media/individual.svg"} alt="Avatar" className="avatar-img rounded-circle" />
                        </div>
                        <div className="col-9">
                            <div className="card-body">
                                <h6>Individual account</h6>
                                <p>Invest in equity, mutual funds and derivatives</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3 card account-type">
                    <div className="row no-gutters">
                        <div className="col-3">
                            <img src={process.env.PUBLIC_URL + "./Media/huf.svg"} alt="Avatar" className="avatar-img rounded-circle" />
                        </div>
                        <div className="col-9">
                            <div className="card-body">
                                <h6>HUF Account</h6>
                                <p>Make tax-efficent investement for your family</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3 card account-type">
                    <div className="row no-gutters">
                        <div className="col-3">
                            <img src={process.env.PUBLIC_URL + "./Media/nri.svg"} alt="Avatar" className="avatar-img rounded-circle" />
                        </div>
                        <div className="col-9">
                            <div className="card-body">
                                <h6>NRI Account</h6>
                                <p>Invest in equity, mutual funds, debentures, and more</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>

                <div className="col-3 card account-type">
                    <div className="row no-gutters">
                        <div className="col-3">
                            <img src={process.env.PUBLIC_URL + "./Media/minor.svg"} alt="Avatar" className="avatar-img rounded-circle" />
                        </div>
                        <div className="col-9">
                            <div className="card-body">
                                <h6>Minor Account</h6>
                                <p>Teach your little ones about money & invest for their future with them</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3 card account-type">
                    <div className="row no-gutters">
                        <div className="col-3">
                            <img src={process.env.PUBLIC_URL + "./Media/corporate.svg"} alt="Avatar" className="avatar-img rounded-circle" />
                        </div>
                        <div className="col-9">
                            <div className="card-body">
                                <h6>Corporate / LLP / Partnership</h6>
                                <p>Manage your business surplus and investments easily</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className='mt-5 '>FAQs</h2>
            <div className="accordion  mb-5 p-5" id="faqAccordion">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                            >
                                What is a Zerodha account?
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseOne"
                        className="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#faqAccordion"
                    >
                        <div className="card-body">
                            <p> A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally. </p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                What documents are required to open a demat account?
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#faqAccordion"
                    >
                        <div className="card-body">
                            <p>The following documents are required to open a Zerodha account online:</p>
                            <ul>
                                <li>PAN number</li>
                                <li>Aadhaar Card (Linked with a phone number for OTP verification)</li>
                                <li>Cancelled cheque or bank account statement (To link your bank account)</li>
                                <li>Income proof (Required only if you wish to trade in Futures & options) </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Is Zerodha account opening free?
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#faqAccordion"
                    >
                        <div className="card-body">
                            <p> Yes, It is completely free. </p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="headingFour">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >
                                Are there any maintenance charges for a demat account?
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                        data-parent="#faqAccordion"
                    >
                        <div className="card-body">
                            <p> The account maintaince charges is appliacable based on the account type.
                                For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.
                                For non-Basic Services Demat Account demat accounts: ₹300 per year + GST.
                                To learn more about BSDA, <a href='' style={{ textDecoration: "none" }}>Click here</a>.</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="headingFive">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                            >
                                Can I open a demat account without a bank account?
                            </button>
                        </h5>
                    </div>
                    <div
                        id="collapseFive"
                        className="collapse"
                        aria-labelledby="headingFive"
                        data-parent="#faqAccordion"
                    >
                        <div className="card-body">
                            <p> To open a demat account, you must have a bank account in your name.
                                If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container p-5 mb-5'>
                <div className='row text-center'>
                    <h1 className='mt-5'>Open a Zerodha account</h1>
                    <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "20%", margin: "0 auto" }}>Sign up for free</button>
                </div>

            </div>

        </div>
    );
}

export default Universes;