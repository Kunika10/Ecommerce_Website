
import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerimg from './images/footer-flower.png'

const Footer = () => {
  return (
    <>
    <footer className='footer_details'>
            <Container className='footer_section_container'>
                <div className='footer_title'>
                    <div className='footer_title_text'>
                        <h6>Valeska</h6>
                    </div>
                </div>
                <Row>
                    <div className='col-md-4 col-lg-2 col-xl-2 col-xs-12'>
                    <div className="footer_sec_item">
                <div className="nav_menu">
                  <h6 className="footer_widget_title">Company</h6>
                  <div className="menu_footer_menu-1_container">
                    <ul className="footer_menu">
                      <li className="menu-item">About Us</li>
                      <li className="menu-item">Our Team</li>
                      <li className="menu-item">Our Blog</li>
                      <li className="menu-item">Gift Cards</li>
                      <li className="menu-item"><Link to='/contactus' className="menu-item"> Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
                    </div>
                    <div className='col-md-4 col-lg-2 col-xl-2 col-xs-12'>
                    <div className="footer_sec_item">
                      <div className="nav_menu">
                        <h6 className="footer_widget_title">Services</h6>
                        <div className="menu-footer-menu-2-container">
                          <ul className="footer_menu">
                            <li className="menu-item">FAQ</li>
                            <li className="menu-item">Shipping</li>
                            <li className="menu-item">Tracking</li>
                            <li className="menu-item">Returns</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className='col-md-4 col-lg-2 col-xl-2 col-xs-12'>
                    <div className="footer_sec_item">
                      <div className="nav_menu">
                        <h6 className="footer_widget_title">Follow Us</h6>
                        <div className="menu-footer-menu-3-container">
                          <ul className="footer_menu">
                            <li className="menu-item">Facebook</li>
                            <li className="menu-item">Instagram</li>
                            <li className="menu-item">YouTube</li>
                            <li className="menu-item">Pinterest</li>
                            <li className="menu-item ">Twitter</li>
                          </ul>
                        </div>
                      </div> 
                    </div>
                    </div>
                    <div className='col-md-12 col-lg-6 col-xl-6 col-xs-12'>
                    <div className="footer_sec_item_img">
                    <img src={footerimg} alt="" />
                    </div>
                    </div>
           </Row>
                    <div className='footer_title_bottom'>
                    <Row>
                    <div className='col-md-6 col-lg-6 col-xl-6 col-xs-12'>
                        <div className="footer_bottom_sec">
                            <p>© 2021 Qode Interactive, All Rights Reserved</p>
                        </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-xs-12'>
                        <div className="footer_bottom">
                            <p>Fashion eCommerce Theme</p>
                        </div>
                        </div>
                      </Row>
                    </div>
                
            </Container>
        </footer>
    </>
  )
}
export default Footer;
