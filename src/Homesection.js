import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from './images/img.jpg';
import img2 from './images/img-2.jpg';
import img3 from './images/img-3.jpg';


function Homesection() {
  return (
    <>
    <div class="js-scroll-counter scroll-counter"></div>
        <section className="elementor_section">
        <Container className='header_section_container'>
          <Row>
          <div className="col-lg-7 col-xl-7 col-md-12 col-sm-12 col-xs-12">
            <div className="elementor_sec">
              <div className="elementor_element" >
                <div className="elementor_triss_container">
                  <div className="triss_elementor_section">
                    <div className="triss_background_image">
                      <div className="triss_m_image" >
                        <img src={img} className="triss_img_background" data-aos="zoom-in"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xl-5 col-md-12 col-sm-12 col-xs-12">
            <div className="triss_m_content">
              <div className="triss_m_content_inner" data-aos-offset='200'>
                <p className="triss_m_text_field"> Now In</p>
                <h2 className="triss_m_title"> The<br/> Urban<br/> Style<br/></h2>
                <div className="triss_m_button">
                  <Link className="triss_link" to='product'> 
                    <span className="triss_m_text">View More</span>
                  </Link> 
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xl-7 col-md-12 col-sm-12 col-xs-12 mob_view">
            <div className="elementor_sec">
              <div className="elementor_element" >
                <div className="elementor_triss_container">
                  <div className="triss_elementor_section">
                    <div className="triss_background_image">
                      <div className="triss_m_image" >
                        <img src={img2} className="triss_img_background" data-aos="zoom-in"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xl-5 col-md-12 col-sm-12 col-xs-12">
            <div className="triss_m_content">
              <div className="triss_m_content_inner1">
                <p className="triss_m_text_field"> Now In</p>
                <h2 className="triss_m_title"> Day<br/> to day <br/> Style<br/></h2>
                <div className="triss_m_button">
                  <Link className="triss_link" to='product'> 
                    <span className="triss_m_text">View More</span>
                  </Link> 
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xl-7 col-md-12 col-sm-12 col-xs-12 desktop_view">
            <div className="elementor_sec">
              <div className="elementor_element" >
                <div className="elementor_triss_container">
                  <div className="triss_elementor_section">
                    <div className="triss_background_image">
                      <div className="triss_m_image">
                        <img src={img2} className="triss_img_background" data-aos="zoom-in"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xl-7 col-md-12 col-sm-12 col-xs-12">
            <div className="elementor_sec">
              <div className="elementor_element" >
                <div className="elementor_triss_container">
                  <div className="triss_elementor_section">
                    <div className="triss_background_image">
                      <div className="triss_m_image">
                        <img src={img3} className="triss_img_background" data-aos="zoom-in"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xl-5 col-md-12 col-sm-12 col-xs-12">
            <div className="triss_m_content">
              <div className="triss_m_content_inner">
                <p className="triss_m_text_field"> Now In</p>
                <h2 className="triss_m_title"> The<br/> Classy<br/> Style<br/></h2>
                <div className="triss_m_button">
                  <Link className="triss_link" to='product'> 
                    <span className="triss_m_text">View More</span>
                  </Link> 
                </div>
              </div>
            </div>
          </div>
          </Row>
        </Container>
      </section>
      </>
  )
}
export default  Homesection; 
