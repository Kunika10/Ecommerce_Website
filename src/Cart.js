import { React, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Container, Row, Table } from 'react-bootstrap';
import product_img1 from './images/shop-img1-600x821.jpg';


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
function Cart () {
    const [counter, setCounter] = useState(0);
 
    const increase = () => {
      setCounter(count => count + 1);
    };
   
    const decrease = () => {
      setCounter(count => count - 1);
    };
  return (
    <>
<div>
    <Container>
    <div role="presentation" className= "page_breadcrumbs" onClick={handleClick}>
            <div className='product_page_inner'>
                <div className='product_content_grid'>
        <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" to= "/" className='product_breadcrumbs'>
        Home
        </Link>
             <Typography color="text.primary">Cart</Typography> 
      </Breadcrumbs>
      </div>
      </div>
      </div>
      <div>
          <Row>
              <div className='col-lg-8 col-xl-8 col-md-12 col-xs-12'>
              <Table className='cart_table'>
  <tbody>
    <tr>
      <td className='table_cross'>X</td>
      <td> <div className='table_image'>
      <img src={product_img1} alt="" /> </div></td>
      <td className='product_name'>Brown Slippers - Small, Green</td>
      <td><div className="def-number-input number-input">
                  <button onClick={decrease} className="minus"></button>
                  <input
                    className="quantity"
                    name="quantity"
                    value={counter}
                    onChange={() => console.log("change")}
                    type="number"
                  />
                  <button onClick={increase} className="plus"></button>
                </div></td>
    </tr>
  </tbody>
</Table>
              </div>
              <div className='col-lg-4 col-xl-4 col-md-12 col-xs-12'>
                <div className='total_cart'>
                  <div className='cart_sec'>
                    <h2>Cart totals</h2>
                    <Table className='table_cart_sec'>
  <tbody>
    <tr>
      <td className='table_cart_side'>Subtotal</td>
      <td>$230.00</td>      
    </tr>
    <tr>
      <td className='table_cart_side'>Shipping</td>
      <td>Flat rate: 
      <span>$55.00</span>
      <p>Shipping to NY. </p>
      </td>      
    </tr>
    <tr>
      <td className='table_cart_side'>Total</td>
      <td>$285.00</td>      
    </tr>
  </tbody>
          </Table>
          <div className='proceed_checkout'>
          <Link to ="/checkout" className='proceed_checkout_link'>Proceed to Checkout</Link>

         
          </div>

                  </div>
                </div>
              </div>
          </Row>
      </div>
    </Container>
</div>
    </>
  )
}
export default Cart;