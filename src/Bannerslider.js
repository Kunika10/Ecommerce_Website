import React from "react";
import Slider from "react-slick";
import "./index.css";
import banner1 from './images/banner1.jpg';
import banner2 from './images/banner2.jpg';
import banner3 from './images/banner3.jpg';
import img from './images/img.jpg';
import { Container, Row } from "react-bootstrap";
function Bannerslider () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <>
      <div class="js-scroll-counter scroll-counter"></div>
      <div className="banner_section">
        <div className="banner_section_inner">
      <Container className="header_section_container">
        <div className="banner_slider">
        <Slider {...settings}>
          <div className="banner_sec">
            <div className="banner_img" style={{backgroundImage: `url(${banner1})`}}>
              <div className="banner_details">
                <Row>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 mob-sec" >
                    <div className="banner_title" data-aos="slide-up">
                      <p>accessorize</p>
                      <h1>the <br/>coolest<br/> shades</h1>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12" >
                    <div className="banner_title_img">
                      <img src={img} alt="" data-aos="flip-right" />
                    </div>
                  </div>
                </Row>
              </div>
            </div>
          </div>
             <div className="banner_sec">
            <div className="banner_img" style={{backgroundImage: `url(${banner2})`}}>
            <div className="banner_details">
            <Row>
              <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 mob-sec" >
                <div className="banner_title" data-aos="slide-up">
                  <p>accessorize</p>
                  <h1>our<br/> latest<br/> model</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12" >
                <div className="banner_title_img">
                  <img src={img} alt="" data-aos="flip-right" />
                </div>
              </div>
            </Row>
            </div>
            </div>
             </div>
             <div className="banner_sec">
            <div className="banner_img" style={{backgroundImage: `url(${banner3})`}}>
            <div className="banner_details">
            <Row>
              <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 mob-sec" >
                <div className="banner_title" data-aos="slide-up"
                >
                  <p>accessorize</p>
                  <h1>new<br/> unique <br/>shapes</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12" >
                <div className="banner_title_img" >
                  <img src={img} alt="" data-aos="flip-right"/>
                </div>
              </div>
            </Row>
            </div>
            </div>
             </div>
        </Slider>
        </div>
      </Container>
      </div>
      </div>
      </>
    );
  }
export default Bannerslider; 
