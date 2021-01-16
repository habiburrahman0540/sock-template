import React from 'react';
import { Link } from "@reach/router";
function Header() {
    return (
        <div>
            <div className="loader_bg">
          <div className="loader"><img src="images/loading.gif" alt="#" /></div>
        </div>
        {/* end loader */}
             <header className="section">
          {/* header inner */}
          <div className="header">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div className="full">
                    <div className="center-desk">
                      <div className="logo"> <a href="index.html"><img src="images/logo.png" alt="#" /></a> </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <div className="menu-area">
                    <div className="limit-box">
                      <nav className="main-menu">
                        <ul className="menu-area-main">
                          <li> <Link to="/">Home</Link> </li>
                          <li> <Link to="/about">About</Link> </li>
                          <li><Link to="/testimonials">Testmonial</Link></li>
                          <li><Link to="/products">Shop</Link></li>
                          <li><Link to="/contact">Contact Us</Link></li>
                          <li className="last"><a href="#"><img src="images/search_icon.png" alt="icon" /></a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end header inner */}
        </header>
       
        </div>
    );
}

export default Header;