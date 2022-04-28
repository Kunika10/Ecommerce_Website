import { React, useState } from 'react';
import {Table, TableBody, TableCell, TableRow, Typography} from '@material-ui/core';
import {Breadcrumbs} from "@material-ui/core";
import ImageGallery from 'react-image-gallery';
import { Container, Row, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import product_img1 from './images/shop-img1-600x821.jpg';
import product_img2 from './images/shop-img2-600x821.jpg';
import product_img3 from './images/shop-img3-600x821.jpg';
import { Helmet } from 'react-helmet';

const images = [
    {
      original: require('./images/shop-img1-600x821.jpg'),
      thumbnail:  require('./images/shop-img1-600x821.jpg'),
      thumbnailPosition: 'right',
    },

    {
        original:  require('./images/shop-variable-img1.jpg'),
        thumbnail:  require('./images/shop-variable-img1.jpg'),
        thumbnailPosition: 'right',
      },
      {
        original:  require('./images/shop-variable-img2.jpg'),
        thumbnail:  require('./images/shop-variable-img2.jpg'),
        thumbnailPosition: 'right',
      },
    
  
  ];

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
function Productview() {
  const [counter, setCounter] = useState(0);
 
//  const increase = () => {
  
//  };

//  const decrease = () => {
//    setCounter(count => count - 1);
//  };
 const [key, setKey] = useState('home');

  return (
    <>
    <div className='product_view_section'>
    <Helmet>
            <title>Productview</title>
            <meta name="description" content="Lorem ipsum dolor sit amet" />
        </Helmet>
      <Container>
      <div className='product_view_inner'>
            <div role="presentation" className= "page_breadcrumbs" onClick={handleClick}>
              <div className='product_page_inner'>
                <div className='product_content_grid'>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" to="/" className='product_breadcrumbs'>
                    Home
                    </Link>
                    <Link underline="hover" to="/product" className='product_breadcrumbs'>
                    Sales
                    </Link>
                    <Typography color="text.primary">Brown Slippers</Typography>
                  </Breadcrumbs>
                </div>
              </div>
          </div>
        <div className='product_view_details'>
        <Row>
        <div className='col-md-7 col-lg-7 col-sm-12 col-xs-12'>
          <div className='imgthumbnil'>
            <ImageGallery items={images} />
          </div>
        </div>
        <div className='col-md-5 col-lg-5 col-sm-12 col-xs-12'>
          <div className='product_view_title'>
            <h1>Brown Slippers</h1>
            <p className='price'>$230.00 - $250.00</p>
            <div className='product_view_star'><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/><StarBorderIcon/></div>
            <div className='product_view_desc'>
            <p>Eget dolor morbi non arcu risus quis varius quam quisque. Leo duis ut diam quam. Velit aliquet sagittis id consectetur. Auctor neque vitae monde tempus quam. Sit amet purus este gravida esten vidmondet consect.</p>
            </div>
            <form action="" className='product_view_form'>
              <Table>
                <TableBody>
                  <TableRow className='product_view_row'>
                    <TableCell className='product_view_size'>
                      <label>Size:</label>
                    </TableCell>
                    <TableCell className='product_view_option'>
                      <select className='product_view_select'>
                        <option value="">Choose an option</option>
                        <option value="small">Small</option>
                        <option value="large">Large</option>
                      </select>
                    </TableCell>
                  </TableRow>
                  <TableRow className='product_view_row'>
                    <TableCell  className='product_view_size'>
                      <label>Color:</label>
                    </TableCell>
                    <TableCell className='product_view_option'>
                      <select className='product_view_select'>
                        <option value="">Choose an option</option>
                        <option value="small">Green</option>
                        <option value="large">Blue</option>
                        <option value="large">Brown</option>
                      </select>
                    </TableCell>
                  </TableRow>
                </TableBody>
                </Table>
            </form>
            <div className='count_sec'>
            <Row>
            
              <div className='col-md-6 col-lg-6 col-xl-6 col-xs-6'>
                <div className="def-number-input number-input">
                  <button onClick={()=>setCounter(counter ? count => count - 1 :0)} className="minus"></button>
                  <input
                    className="quantity"
                    name="quantity"
                    value={counter}
                    onChange={() => console.log("change")}
                    type="number"
                  />
                  <button onClick={()=>setCounter(count => count + 1)} className="plus"></button>
                </div>
              </div>
                <div className='col-md-6 col-lg-6 col-xl-6 col-xs-6'>
                <Link to = 'Cart' className='product_view_link'>
                <div className='product_view_cart'>
                <p> ADD TO CART </p>
                </div>
                </Link>
                </div>
            </Row>
            </div>
            <div className='product_view_wishlist'><FavoriteBorderIcon/> <p>ADD TO WISHLIST</p></div>
              <div className='product_meta'>
                <li>SKU: 01</li>
                <li>Category: Sales</li>
                <li>Tag: Design</li>
              </div>
            </div>
        </div>
    
    </Row>
    <div className='tabs_section'>
    <Tabs id="controlled-tab-example" defaultActiveKey="Description" onSelect={(k) => setKey(k)}
    >
    
      <Tab eventKey="Description" title="Description ">
      Eget dolor morbi non arcu risus quis varius quam quisque. Leo duis ut diam quam. Velit aliquet sagittis id consectetur. Auctor neque vitae tempus quam. Sit amet purus gravida quis blandit turpis. At erat pellentesque adipiscing commodo elit at. Dis parturient montes nascetur ridiculus mus. Donec massa sapien faucibus et molestie ac. Maecenas sed enim ut sem viverra aliquet eget sit amet. Convallis posuere morbi leo urna molestie at elementum.
      </Tab>
      <Tab eventKey="Additional information" title="Additional information">
      Eget dolor morbi non arcu risus quis varius quam quisque. Leo duis ut diam quam. Velit aliquet sagittis id consectetur. Auctor neque vitae tempus quam. Sit amet purus gravida quis blandit turpis. At erat pellentesque adipiscing commodo elit at. Dis parturient montes nascetur ridiculus mus. Donec massa sapien faucibus et molestie ac. Maecenas sed enim ut sem viverra aliquet eget sit amet. Convallis posuere morbi leo urna molestie at elementum.
      </Tab>
      <Tab eventKey="Reviews (3) " title="Reviews (3) ">
      Eget dolor morbi non arcu risus quis varius quam quisque. Leo duis ut diam quam. Velit aliquet sagittis id consectetur. Auctor neque vitae tempus quam. Sit amet purus gravida quis blandit turpis. At erat pellentesque adipiscing commodo elit at. Dis parturient montes nascetur ridiculus mus. Donec massa sapien faucibus et molestie ac. Maecenas sed enim ut sem viverra aliquet eget sit amet. Convallis posuere morbi leo urna molestie at elementum.
      </Tab>
    </Tabs>
    </div>
    <div className='product_sec_list'>
    <h2>Related products</h2>
    <Row> 
    <div className='col-md-4 col-lg-4 col-xl-4 col-xs-12'>
      <div className='pro_img'>
        <img src={product_img1} alt="" />
      </div>
      <div className='pro_content'>
        <h6>Light Blue Shirt</h6>
        <span> $305.00</span>
      </div>
    </div>
    <div className='col-md-4 col-lg-4 col-xl-4 col-xs-12'>
    <div className='pro_img'>
        <img src={product_img2} alt="" />
      </div>
      <div className='pro_content'>
        <h6>Light Blue Shirt</h6>
        <span> $305.00</span>
      </div>
    </div>
    <div className='col-md-4 col-lg-4 col-xl-4 col-xs-12'>
    <div className='pro_img'>
        <img src={product_img3} alt="" />
      </div>
      <div className='pro_content'>
        <h6>Light Blue Shirt</h6>
        <span> $305.00</span>
      </div>
    </div>
    </Row>
    </div>
    </div>
    </div>
    </Container>
    </div>
    </>
  )
}

export default Productview ;

