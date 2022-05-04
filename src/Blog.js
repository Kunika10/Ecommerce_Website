import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import blogsidebarimg1 from './images/blog-sidebar-img-1.jpg';
import instagramimg1 from './images/instagram-img-1.jpg';
import instagramimg2 from './images/instagram-img-2.jpg';
import instagramimg3 from './images/instagram-img-3.jpg';
import instagramimg4 from './images/instagram-img-4.jpg';
import instagramimg5 from './images/instagram-img-5.jpg';
import instagramimg6 from './images/instagram-img-6.jpg';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import blog1img1 from './images/blog-1-img-1.jpg';
import blog2img2 from './images/blog-2-img-2.jpg';



const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft:' 0 !important',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    borderBottom: '1px solid #000',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: '0',
  },
}));
function Blog () {
  const classes = useStyles();
  return (
    <>
    <div className='blog'>
    <Helmet>
            <title>Blog</title>
            <meta name="description" content="Lorem ipsum dolor sit amet" />
        </Helmet>
        <Container>
          <div className='blog_section'>
            <Row>
              <Col md={3}  lg={3}  xl={3}  xs={12}>
                <div className='blog_leftside'>
                  <div className='blog_leftside_img'>
                    <img src={blogsidebarimg1} alt="" />
                  </div>
                  <div className='blog_sec'>
                    <h5>Categories</h5>
                    <ul>
                      <li>Fashion</li>
                      <li>Inspiring Outfit</li>
                      <li>Lifestyle</li>
                      <li>Outdoors</li>
                      <li>Street-Style</li>
                    </ul>
                  </div>
                  <div className='blog_sec'>
                    <h5>Tags</h5>
                    <div>
                      <Link to='/' className='tag_cloud_link'>Beauty</Link>
                      <Link to = '/' className="tag_cloud_link">Casual</Link>
                      <Link to = '/' className="tag_cloud_link">Colorful</Link>
                      <Link to = '/' className="tag_cloud_link">Decor</Link>
                    </div>
                  </div>
                  <div className='blog_sec'>
                    <h5>Social</h5>
                    <ul>
                      <li>Twitter </li>
                      <li>Facebook </li>
                      <li>Instagram </li>
                      <li>Pinterest </li>
                    </ul>
                  </div>
                  <div className='blog_sec'>
                    <h5>Gallery</h5>
                    <div className='gallery_img'>
                      <img src={instagramimg1} alt="" />
                    </div>
                    <div className='gallery_img'>
                      <img src={instagramimg2} alt="" />
                    </div>
                    <div className='gallery_img'>
                      <img src={instagramimg3} alt="" />
                    </div>
                    <div className='gallery_img'>
                      <img src={instagramimg4} alt="" />
                    </div>
                    <div className='gallery_img'>
                      <img src={instagramimg5} alt="" />
                    </div>
                    <div className='gallery_img'>
                      <img src={instagramimg6} alt="" />
                    </div>
                  </div>
                  <div className='blog_search'>  
                 
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}/>
            </div>
      </div>
                </div>
              </Col>
              <Col md={9}  lg={9}  xl={9}  xs={12}>
              <div className='blog_rightside'>
              <div className='blog_right_sec'>
                <div className='blog_rightside_img'>
                  <img src={blog1img1} alt="" />
                </div>
                <div className='blog_rightside_content'>
                <div className='blog_holder_sec'>
                  <div className='blog_holder'>
                  <Link to='/'>June 1, 2021</Link>
                  </div>
                  <div className='blog_separtion'></div>
                  <div className='blog_holder'>
                  <Link to='/'>Inspiring Outfit</Link>
                  </div>
                  </div>
                  <h2>Welcome The Soft Skinscent Experience</h2>
                </div>
                </div>
                <div className='blog_right_sec'>
                  <div className='blog_rightside_img'>
                    <img src={blog2img2} alt="" />
                  </div>
                  <div className='blog_rightside_content'>
                    <div className='blog_holder_sec'>
                      <div className='blog_holder'>
                      <Link to='/'>June 1, 2021</Link>
                      </div>
                      <div className='blog_separtion'></div>
                      <div className='blog_holder'>
                      <Link to='/'>Inspiring Outfit</Link>
                      </div>
                    </div>
                      <h2>Patterns On The Streets Of London</h2>
                  </div>
                </div>
                {/* <div className='blogsec'>
                  <div className='blogsec_quote' style={{background:`url(${require("./images/blog-3-img-3.jpg")})`}}>
                  <div className='blogsec_content'>
                  <span>Quote</span>
                  <h4>“You can have anything you want in life if you dress for it.”</h4>
                  <span>Adele Clarke</span>
                  </div>
                  </div>
                </div> */}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
    </div>
    </>
  )
}
export default Blog;



