import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';


const Contactus = () =>{
    const [status, setStatus] = useState("Send Message");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <>
    <div className='contact_us'>
    <div className='contactus_map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.4701322260444!2d-80.00147308255616!3d40.4427304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f211a7fe765d%3A0xfa9a62afcbd23d54!2sDiamonds%20By%20Rothschild!5e0!3m2!1sen!2sin!4v1649315182353!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
    </div>
    <Container>
    <div className='contactus_detail'>
    <Row>
        <div className='col-md-12 col-lg-4 col-sm-12 col-xs-12'>
        <div className='contactus_title'>
            <p className='contactus_title_para'>Latest Collection</p>
            <h1>Get in <br/>touch <br/>with us </h1> 
            <div className='social_icon'>
              <ul>
                <li>
                  facebook
                </li>
                <li>
                  Instagram
                </li>
                <li>
                  twitter
                </li>
              </ul>
            </div>
        </div>
        </div>
        <div className='col-md-12 col-lg-8 col-sm-12 col-xs-12'>
        
        <div className='contactus_form'> 
        <form onSubmit={handleSubmit}>
        <Row>
        <div className='col-md-12 col-lg-6 col-xl-6 col-xs-12'>
      <div className='contactus_email'>
        <input type="email" id="email" placeholder='Your e-mail' required />
      </div>
      </div>
      <div className='col-md-12 col-lg-6 col-xl-6 col-xs-12'>
      <div className='contactus_name'>
      <input type="text" id="name" placeholder='Your Name' required />
      </div>
      </div>
      <div className='col-md-12 col-lg-12 col-xl-12 col-xs-12'>
      <div className='contactus_message'>
        <textarea id="message" placeholder='Message' required />
      </div>
      </div>
      <div className='col-md-12 col-lg-12 col-xl-12 col-xs-12'>
      <div className='contactus_submit'>
      <button type="Send Message">{status}</button>
      </div>
      </div>
      </Row>
    </form></div>
        </div>
    </Row>
    </div>
    </Container>
    </div>
    </>
  )
}
export default Contactus;
