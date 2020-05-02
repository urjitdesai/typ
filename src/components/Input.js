import React, { Component } from 'react';
import {ButtonContainer} from './Button';

class Input extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid text-center d-lg-block">
                <h5 className="text text-title text-blue mt-4">Help Us Deliver Your Pizza to You</h5>
            <div className="row">

                <div className="col-10 mx-auto col-lg-2">
                    
                    <input className="k-textbox mt-3 ml-0" placeholder="Name" style={{width: "300px"}}></input>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    
                    <input className="k-textbox mt-3" placeholder="Delivery Address" style={{width: "370px"}}></input>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    
                    <input className="k-textbox mt-3 ml-5 " placeholder="Phone Number" style={{width: "320px"}}></input>
                </div>

                <div className="col-10 mx-auto col-lg-2 mt-3">
                    
                    <ButtonContainer>Submit</ButtonContainer>
                </div>

            </div>
        </div>
         );
    }
}
 
export default Input;