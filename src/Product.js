import React from 'react'
import {Typography} from '@material-ui/core';
import {Breadcrumbs} from "@material-ui/core";
import { Link } from 'react-router-dom';
import product_img1 from './images/shop-img1-600x821.jpg';
import product_img2 from './images/shop-img2-600x821.jpg';
import product_img3 from './images/shop-img3-600x821.jpg';
import product_img4 from './images/shop-img4-600x821.jpg';
import product_img5 from './images/shop-img5-1-600x821.jpg';
import product_img6 from './images/shop-img6-600x821.jpg';
import product_img7 from './images/shop-img7-600x821.jpg';
import product_img8 from './images/shop-img8-600x821.jpg';
import side_img from './images/sidebar-shop-img1.jpg';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { Button, Container } from 'react-bootstrap';
import {Helmet} from "react-helmet";


const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });
  
  function valuetext(value) {
    return `${value}INR`;
  }


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
 function Product() {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 990]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


  return (
    <>
    <div className='product_section'>
    <Helmet>
            <title>Product</title>
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
        <Typography color="text.primary">Shop</Typography>
      </Breadcrumbs>
      </div>
      </div>
      </div>
        <div className='product_view conatiner'>
        <div className='row'>
            <main className='pro_sec'>
                <div className='product_inner_sec'>
                <div className='product_grid_item col-md-12 col-lg-8 col-sm-12 col-xl-8 col-xs-12'>
                    <div className='product_view_sec '>
                        <div className="product_woo_results">
                            <p className="product-result-count">
                                    Showing 1–8 of 102 results</p>
                                    <form className="product_ordering" method="get">
                                    <select name="orderby" className="orderby select2-hidden-accessible" aria-label="Shop order" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                    <option value="menu_order" selected="selected" data-select2-id="3">Default sorting</option>
                                    <option value="popularity" data-select2-id="6">Sort by popularity</option>
                                    <option value="rating" data-select2-id="7">Sort by average rating</option>
                                    <option value="date" data-select2-id="8">Sort by latest</option>
                                    <option value="price" data-select2-id="9">Sort by price: low to high</option>
                                    <option value="price-desc" data-select2-id="10">Sort by price: high to low</option>
                                    </select>
                                    <span className="select2 select2-container select2-container--default select2-container--below" dir="ltr" data-select2-id="2" >
                                    <span className="selection">
                                    <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-orderby-id-container">
                                    <span className="select2-selection__arrow" role="presentation">
                                    <b role="presentation"></b>
                                    </span>
                                    </span>
                                    </span>
                                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                                    </span>
                                    <input type="hidden" name="paged" value="1"/>
                                    </form>
                        </div>
                        <div className='product_list'>
                            <ul className='product_list_ul'>
                                <li className='product_list_ul_li'>
                                    
                                    <div className='product_inner'>
                                    <Link to='/productview' className='product_inner_link'>
                                        <div className='product_image'>
                                            <img src={product_img1} alt="" />
                                        </div>
                                        <div className='product_content'>
                                            <h6>Brown Slippers</h6>
                                            <p>$230.00 – $250.00</p>
                                        </div>
                                    </Link>
                                    </div>
                                    
                                </li>
                                <li className='product_list_ul_li'>
                                    <div className='product_inner'>
                                        <div className='product_image'>
                                            <img src={product_img2} alt="" />
                                        </div>
                                        <div className='product_content'>
                                            <h6>Brown Slippers</h6>
                                            <p>$230.00 – $250.00</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='product_list_ul_li'>
                                    <div className='product_inner'>
                                        <div className='product_image'>
                                            <img src={product_img3} alt="" />
                                        </div>
                                        <div className='product_content'>
                                            <h6>Brown Slippers</h6>
                                            <p>$230.00 – $250.00</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='product_list_ul_li'>
                                    <div className='product_inner'>
                                        <div className='product_image'>
                                            <img src={product_img4} alt="" />
                                        </div>
                                        <div className='product_content'>
                                            <h6>Brown Slippers</h6>
                                            <p>$230.00 – $250.00</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='product_list_ul_li'>
                                    <div className='product_inner'>
                                        <div className='product_image'>
                                            <img src={product_img5} alt="" />
                                        </div>
                                        <div className='product_content'>
                                            <h6>Brown Slippers</h6>
                                            <p>$230.00 – $250.00</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='product_list_ul_li'>
                                    <div className='product_inner'>
                                        <div className='product_image'>
                                            <img src={product_img6} alt="" />
                                        </div>
                                        <div className='product_content'>
                                            <h6>Brown Slippers</h6>
                                            <p>$230.00 – $250.00</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='product_list_ul_li'>
                                    <div className='product_inner'>
                                        <div className='product_image'>
                                            <img src={product_img7} alt="" />
                                        </div>
                                        <div className='product_content'>
                                            <h6>Brown Slippers</h6>
                                            <p>$230.00 – $250.00</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='product_list_ul_li'>
                                    <div className='product_inner'>
                                        <div className='product_image'>
                                            <img src={product_img8} alt="" />
                                        </div>
                                        <div className='product_content'>
                                            <h6>Brown Slippers</h6>
                                            <p>$230.00 – $250.00</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <nav className="woocommerce-pagination">
                            <span aria-current="page" className="page-numbers current">01</span>
                            <Link className="page-numbers" to="/">02</Link>
                            <span className="page-numbers dots" to='/'>…</span>
                            <Link className="page-numbers" to='/'>012</Link>
                            <Link className="page-numbers" to='/'>013</Link>
                            <Link className="next page-numbers" to='/'>
                            <ArrowForwardIosOutlinedIcon/>
                            </Link></nav>
                    </div>
                </div>
                <div className='product_grid_sidebar col-md-12 col-sm-12 col-lg-4 col-xl-4 col-xs-12'>
                <div className='product_sidebar'>
                    <div className='side_img'>
                        <img src={side_img} alt="" />
                    </div>
                    <div className='product_space'></div>
                    <div className='product_category'>
                        <h5 className='product_title'>Categories</h5>
                        <ul className='product_category_ul'> 
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Anklet</Link>
                                <span> (3) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Crystal</Link>
                                <span> (1) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Dresses </Link>
                                <span> (3) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Fashion</Link>
                                <span> (12) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>furniture</Link>
                                <span> (8) </span>
                                <ul className='product_children'>
                                    <li className='product_category_item'>
                                    <Link to='/' className='product_category_link'>new</Link>
                                    <span>(4)</span>
                                    </li>
                                    <li className='product_category_item'>
                                    <Link to='/' className='product_category_link'>Retro</Link>
                                    <span>(4)</span>
                                    </li>
                                </ul>
                            </li >
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>gift</Link>
                                <span> (3) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Jewelry</Link>
                                <span> (5) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Man's</Link>
                                <span> (5) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Metallic </Link>
                                <span> (1) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>New Items</Link>
                                <span> (16) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Outdoors</Link>
                                <span> (8) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Pendant</Link>
                                <span> (1) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Perfume</Link>
                                <span> (5) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Rings</Link>
                                <span> (3) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Sales</Link>
                                <span> (8) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Shades</Link>
                                <span> (1) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Silver</Link>
                                <span> (5) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Skirts</Link>
                                <span> (2) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Street-style</Link>
                                <span> (5) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Sunglasses </Link>
                                <span> (1) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Tops</Link>
                                <span> (4) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Vests </Link>
                                <span> (11) </span>
                            </li>
                            <li className='product_category_item'>
                                <Link to='/' className='product_category_link'>Woman's </Link>
                                <span> (8) </span>
                            </li>
                        </ul>
                    </div>
                    <div className='product_tag'>
                        <h5 className='product_tag_title'>Tags</h5>
                        <div className="tag_cloud">
                            <Link to='/' className='tag_cloud_link'>Beauty</Link>
                            <Link to = '/' className="tag_cloud_link">Casual</Link>
                            <Link to = '/' className="tag_cloud_link">Colorful</Link>
                            <Link to = '/' className="tag_cloud_link">Decor</Link>
                            <Link to = '/' className="tag_cloud_link">Design</Link>
                            <Link to = '/' className="tag_cloud_link">Diamonds</Link>
                            <Link to = '/' className="tag_cloud_link">Fashion</Link>
                            <Link to = '/' className="tag_cloud_link">Gold</Link>
                            <Link to = '/' className="tag_cloud_link">Jewerelly</Link>
                            <Link to = '/' className="tag_cloud_link">Perfume</Link>
                            <Link to = '/' className="tag_cloud_link">Silver</Link>
                            <Link to = '/' className="tag_cloud_link">Style</Link></div>
                        </div>
                        <div> 
                            <div className={classes.root}>
                                <Typography id="range-slider" >
                                    <h5 className='product_range_title'>Filter</h5>
                                </Typography>
                                <Slider className='range_slider'
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay={false}
                                    aria-labelledby="range-slider"
                                    getAriaValueText={valuetext}
                                />
                                </div>
                                <div className="price_slider_amount">
                                <Button>Filter</Button>
                                    <div className="price_label">
                                    Price:  
                                    <span className="from">$80</span> — <span className="to">$990</span>
                                    </div>
</div>
                            </div>
        <div className="products_details">
          <h5 className="product_details_title">Popular Products</h5>
          <ul className="product_list_details">
              <li>
                    <div className="product_image_details">
                        <img src={product_img1} className="product_details_img" />
                    </div>
                    <div className="product_details_content">
                    <h6 className="product_title_details">
                       Wool Scarf
                    </h6>
                        <span className="price_amount">
                            <span className="price_currencySymbol">$</span>356.00 </span> 
                    </div>
                </li>
                <li>
            <div className="product_image_details">
              <Link to = '/'>
                <img src={product_img2} className="product_details_img"/> </Link>
            </div>
            <div className="product_details_content">
              <h6 className="product_title_details">
                Linen Shirt
              </h6>
                <span className="price_amount"><bdi><span className="price_currencySymbol">$</span>230.00</bdi></span>
            </div>
          </li>
          <li>
            <div className="product_image_details">
              <Link to='/'>
                <img src={product_img3} /> </Link>
            </div>
            <div className="product_details_content">
              <h6 className="product_title_details">Lace Underwire Bra
              </h6>
                <span className="price_amount"><bdi><span className="price_currencySymbol">$</span>593.00</bdi></span>
            </div>
          </li>
        </ul></div>

                </div>
                </div>
                
                </div>
            </main>
            </div>
        </div>
        </Container>
    </div>
    </>
  )
}
export default Product;
