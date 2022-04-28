import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Helmet } from 'react-helmet';



function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
function Checkout () {

    const [checkoutbox, setCheckoutbox] = useState(0);
const handleChange = () => {
    setCheckoutbox(checkoutbox ? 0 : 1);
};

  return (
    <>
        <div>
        <Helmet>
            <title>Checkout</title>
            <meta name="description" content="Lorem ipsum dolor sit amet" />
        </Helmet>
            <Container>
            <div role="presentation" className= "page_breadcrumbs" onClick={handleClick}>
            <div className='product_page_inner'>
                <div className='product_content_grid'>
        <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" to="/" className='product_breadcrumbs'>
        Home
        </Link>
        <Typography color="text.primary">Cart</Typography> 
      </Breadcrumbs>
      </div>
      </div>
      </div>
             
                <Row>
                    <div className='col-lg-6 col-xl-6 col-md-12 col-xs-12'>
                        <div className='checkout_sec'>
                        <h3>Billing details</h3>
                            <div className='checkout_form'>
                            <Form>
                            <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label required >First Name *</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label>Last Name *</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label>Company name (optional)</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label>Country / Region *</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option>United States (US)</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label>Street address *</Form.Label>
                                    <Form.Control type="text" placeholder="House number and street name" className='checkout_input' />
                                    <Form.Control type="text" placeholder="Apartment,suite,unit,etc. (optional)" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label>Town / City *</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label>State *</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option>New York</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label>ZIP Code *</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label>Phone *</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>      
                            </Form>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-xl-6 col-md-12 col-xs-12'>
                    <Form className='shipping_form'> 
                        <Form.Group id="formGridCheckbox" className='ship_label'>
                            <Form.Check type="checkbox"  onClick={handleChange} label="Ship to a different address?"></Form.Check> 
                        </Form.Group>

                        <div className='shipping_sec'>
                       

                        {checkoutbox ? (
                            <Col md={12}>
                            <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label required >First Name *</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label>Last Name *</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label>Company name (optional)</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label>Country / Region *</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option>United States (US)</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label>Street address *</Form.Label>
                                    <Form.Control type="text" placeholder="House number and street name" className='checkout_input'/>
                                    <Form.Control type="text" placeholder="Apartment,suite,unit,etc. (optional)" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label>Town / City *</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label>State *</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option>New York</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className='checkout'>
                                    <Form.Label>ZIP Code *</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                          ) : (
                            ""
                          )}
                        
                            <Form.Group controlId="exampleForm.ControlTextarea1" className='checkout'>
                            <Form.Label>Order notes (optional)</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Notes about your order, e.g. special notes for delivery."/>
                        </Form.Group>
                        
                        </div>
                        </Form>
                    </div>
                </Row>
            </Container>
        </div>
    </>
  )
}
export default Checkout;