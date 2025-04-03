import React from 'react';
import { Link } from 'react-router-dom';

function UpNavbar() {
    return (
        
            <nav class="navbar navbar-expand-lg border-bottom" style={{background:"#FFF"}}>
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        <img src={`${process.env.PUBLIC_URL}Media/logo.svg`} style={{width:"20%"}} alt='Logo'/>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/signup_page">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/about_page">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/product">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/support_page">Support</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/" role="button"  aria-expanded="false">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
    );
}

export default UpNavbar;