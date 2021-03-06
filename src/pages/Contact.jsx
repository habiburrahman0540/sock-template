import React from 'react';

function Contact() {
    return (
        <div>
                   <div id="plant" className="contact_us layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div className="titlepage">
                  <h2><strong className="black"> Contact</strong>  Us</h2>
                  <span style={{textAlign: 'center'}}>available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_us_2 layout_padding paddind_bottom_0">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="soc_text">soC</div>
              </div>
              <div className="col-md-6">
                <div className="email_btn">
                  <form action="/action_page.php">
                    <div className="form-group">
                      <input type="text" className="form-control form-control-sm" placeholder="Name" name="Name" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-sm" placeholder="Email" name="Email" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-sm" placeholder="Phone" name="Phone" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-sm" placeholder="Massage" name="text3" />
                    </div>
                    <div className="submit_btn">
                      <button type="submit" className="btn btn-primary" style={{background: '#081b30', color: '#fff', padding: '11px'}}>Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="contact_us_3 layout_padding">
                <div className="row">
                  <div className="col-md-4">
                    <h1 style={{color: '#ffffff'}}>Newsletter</h1>
                    <p className="long_text">It is a long established fact that a reader will be distracted  a</p>
                  </div>
                  <div className="col-md-8">
                    <div className="email_text">
                      <div className="input-group mb-3">
                        <input style={{borderBottomLeftRadius: '20px !important', borderTopLeftRadius: '20px !important'}} type="text" className="form-control" placeholder="Enter your email" />
                        <div className="input-group-append">
                          <button style={{borderTopRightRadius: '20px !important', borderBottomRightRadius: '20px !important', color: '#fff', paddingBottom: '10px', paddingTop: '10px'}} className="btn btn-primary" type="Subscribe">Subscribe</button>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer" className="Address layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="titlepage">
                  <div className="main">
                    <h1 className="address_text">Address</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="address_2">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="site_info">
                    <span className="info_icon"><img src="images/map-icon.png" /></span>
                    <span style={{marginTop: '10px'}}>No.123 Chalingt Gates, Supper market New York</span></div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="site_info">
                    <span className="info_icon"><img src="images/phone-icon.png" /></span>
                    <span style={{marginTop: '21px'}}>( +71 7986543234 )</span></div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="site_info">
                    <span className="info_icon"><img src="images/email-icon.png" /></span>
                    <span style={{marginTop: '21px'}}>demo@gmail.com</span></div>
                </div>
              </div> 
            </div>
          </div>
          <div className="menu_main">
            <div className="menu_text">
              <ul>
                <li className="active"><a href="#">Home</a></li>                         
                <li><a href="about.html">About</a></li>
                <li><a href="testmonial.html">Testmonial</a></li>
                <li><a href="clients.html">Shop</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    );
}

export default Contact;