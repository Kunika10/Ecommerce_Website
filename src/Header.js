import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import TocOutlinedIcon from "@material-ui/icons/TocOutlined";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { Container } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import sideimg1 from "./images/menu-img3.jpg";
import sideimg2 from "./images/menu-img4.jpg";
import sideimg3 from "./images/menu-img1.jpg";
import sideimg4 from "./images/menu-img2.jpg";
import { AiOutlineClose } from "react-icons/ai";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import { BrowserView, MobileView } from "react-device-detect";
import { useEffect } from "react";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  list: {
    width: 1850,
  },
  fullList: {
    width: "auto",
  },
  cart: {
    width: 350,
  },
  fullCart: {
    width: "auto",
  },
  mobile: {
    width: "auto",
  }, 
  fullmobile: {
    width: 250,
  }
});

const useStyles1 = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    margin: '20px 30px',
    width: '100%',
  },
}));
function Header() {

  const classes1 = useStyles1();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
    right1: false,
    top: false,
  });

    useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const toggleDrawer1 = (anchor1, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor1]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="sidebar_inner">
        <div className="sidebar">
          <ClearOutlinedIcon className="side_close_icon"></ClearOutlinedIcon>
        </div>
        <div className="side_area_inner">
          <div className="product_list_category" data-aos="slide-down">
            <div className="product_list_image">
              <img src={sideimg1} alt="" className="side_img" />
            </div>
            <div className="product_list_content">
              <h5>Vests</h5>
            </div>
          </div>
          <div className="product_list_category" data-aos="slide-down">
            <div className="product_list_image">
              <img src={sideimg2} alt="" className="side_img" />
            </div>
            <div className="product_list_content">
              <h5>Sales</h5>
            </div>
          </div>
          <div className="product_list_category" data-aos="slide-down">
            <div className="product_list_image">
              <img src={sideimg3} alt="" className="side_img" />
            </div>
            <div className="product_list_content">
              <h5>New Items</h5>
            </div>
          </div>
          <div className="product_list_category" data-aos="slide-down">
            <div className="product_list_image">
              <img src={sideimg4} alt="" className="side_img" />
            </div>
            <div className="product_list_content">
              <h5>Fashion</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const cart = (anchor) => (
    <div
      className={clsx(classes.cart, {
        [classes.fullCart]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="sidebar_inner_cart">
        <p>No products in the cart.</p>
        <div className="cross_btn">
          <AiOutlineClose className="cross_button" />
        </div>
      </div>
    </div>
  );
  const mobile = (anchor1) => (
    <div
      className={clsx(classes.mobile, {
        [classes.fullmobile]: anchor1 === "top" || anchor1 === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer1(anchor1, false)}
      onKeyDown={toggleDrawer1(anchor1, false)}
    >
      <div className="mobile_sec">
        <ul className="navigation_ul_mob">
          <li>
            <Link to="/" className="nav-sec-mob">
              Home
            </Link>
          </li>
          <li>
            <Link to="page" className="nav-sec-mob">
              Pages
            </Link>
          </li>
          <li>
            <Link to="product" className="nav-sec-mob">
              Shop
            </Link>
          </li>
          <li>
            <Link to="blog" className="nav-sec-mob">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-sec-mob">
              Landing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <div className="header-section">
        <Container className="header_section_container">
          <header className="triss_header">
          
            <BrowserView>
              <div className="navigation">
                <Link to="/" className="logo_nav">
                  Valeska
                </Link>

                <ul className="navigation_ul">
                  <li>
                    <Link to="/" className="nav-sec">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="pages" className="nav-sec">
                      Pages
                    </Link>
                  </li>
                  <li>
                    <Link to="product" className="nav-sec">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link to="blog" className="nav-sec">
                      Blog
                    </Link>
                  </li>
                  <li>
                  <Link onClick={()=> window.open("https://www.google.com/","_blank")} to="/"  className="nav-sec">
                      Landing
                    </Link>
                  </li>
                  <li>
                    <SearchOutlinedIcon aria-describedby={id} variant="contained" onClick={handleClose1} /> 
                        <Popover className="search_popup"
                          id={id}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                        >
                          <Typography className={classes1.typography}>
                           <InputBase
                      className={classes1.input}
                      placeholder="Enter Your Search"
                      inputProps={{ "aria-label": "search" }}/>
                      </Typography>
                      <button type="button" className="close search_close one" onClick={handleClose}>
                                    <span>&times;</span>
                                </button>
                        </Popover>
                   
                  </li>
                  <li className="cart_section">
                    {["right", "right1"].map((anchor, index) => (
                      <React.Fragment key={anchor}>
                        {console.log(anchor)}
                        <Button onClick={toggleDrawer(anchor, true)}>
                          {index == 0 ? (
                            <LocalMallOutlinedIcon />
                          ) : (
                            <TocOutlinedIcon />
                          )}
                        </Button>
                        <Drawer
                          anchor={"right"}
                          open={state[anchor]}
                          onClose={toggleDrawer(anchor, false)}
                        >
                          {index == 0 ? cart(anchor) : list(anchor)}
                        </Drawer>
                      </React.Fragment>
                    ))}
                  </li>
                </ul>
              </div>
            </BrowserView>
            <MobileView>
              <div className="header_mob
              ">
                <Link to="/" className="header_logo_nav">
                  Valeska
                </Link>
                <ul>
                  
                  <li>
                    {["top"].map((anchor1) => (
                      <React.Fragment key={anchor1}>
                        <Button onClick={toggleDrawer1(anchor1, true)}>
                          {<TocOutlinedIcon />}
                        </Button>
                        <Drawer
                          anchor1={anchor1}
                          open={state[anchor1]}
                          onClose={toggleDrawer1(anchor1, false)}
                        >
                          {mobile(anchor1)}
                        </Drawer>
                      </React.Fragment>
                    ))}
                  </li>
                  <li>
                    <LocalMallOutlinedIcon />
                  </li>
                </ul>
              </div>
            </MobileView>
          </header>
        </Container>
      </div>
    </>
  );
}
export default Header;
