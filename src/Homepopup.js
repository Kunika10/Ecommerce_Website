import React, { Component} from 'react'
import { Button } from 'react-bootstrap';
import { Checkbox, TextField } from '@material-ui/core';
import { SubscriptionsRounded } from '@material-ui/icons';
import axios from 'axios';

const handleSubmit = e => {
    e.preventDefault();
    const subscribe = document.getElementById("subscribe").value;
    axios({
      method: "POST",
      url: " ",
      data: {
        subscribe: subscribe,
      }
    });
  }; 
class Homepopup extends Component {
  state = { checked: false }
    constructor(props) {
      
        super(props);
        this.state = {
            modalState: true,
        };
        this.handleShow = this.handleShow.bind(this);
       
    }
    handleShow() {
        this.setState({ modalState: !this.state.modalState });
    }
    render() {
        return (
            <>
            <div class="js-scroll-counter scroll-counter"></div>
            <div>
                <div className={"modal fade" + (this.state.modalState ? " show d-block" : " d-none")} tabIndex="-1" role="dialog" data-aos="slide-up" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal_title">Subscribe to our newsletter for updates</h6>
                                <p className='modal_subtitle'>Get 30% off on our new collection</p>
                                <button type="button" className="close" onClick={this.handleShow}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body"> 
                            <form autoCorrect="off" className="subscribe-form" onSubmit={e => handleSubmit(e)}  >
                      <div className="form-row">
                        <div className="form-group">
                          <TextField type="email" className="email_form" margin="normal" placeholder="Your e-mail" />
                        </div>
                        <div className="subscribe-form-group">
                          <Button variant="contained" size="large" type="submit" className='' endicon={<SubscriptionsRounded />}> Subscribe</Button>
                        </div>
                        <div>

                        
                        </div>
                      </div>
                      <div className='home_checkbox'>
                      <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            color="primary"
          /> <span>Disable This Pop-up</span>  </div>

          
                        </form></div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Homepopup;

