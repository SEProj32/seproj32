import React from "react";
import './form_proj.css';
import {Link} from "react-router";

class FormElementCombined extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name === "username") {
            this.setState({ value1: event.target.value })
        }
        else if (event.target.name === "password") {
            this.setState({ value2: event.target.value })
        }
        else if (event.target.name === "type") {
            this.setState({ value3: event.target.value })
        }
    }

    handleSubmit(event) {
       
       // alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
       if (this.state.value1 === '' || this.state.value2 === '')
       event.preventDefault();
    }
    render() {
        return (
            <div class="form">
      
            <ul class="tab-group">
              <li class="tab active"><a href="#signup">Sign Up</a></li>
              <li class="tab"><a href="#login">Log In</a></li>
            </ul>
            
            <div class="tab-content">
              <div id="signup">   
                <h1>Sign Up for Free</h1>
                
                <form action="/" method="post">
                
                <div class="top-row">
                  <div class="field-wrap">
                    <label>
                      First Name<span class="req">*</span>
                    </label>
                    <input type="text" required autocomplete="off" />
                  </div>
              
                  <div class="field-wrap">
                    <label>
                      Last Name<span class="req">*</span>
                    </label>
                    <input type="text"required autocomplete="off"/>
                  </div>
                </div>
      
                <div class="field-wrap">
                  <label>
                    Email Address<span class="req">*</span>
                  </label>
                  <input type="email"required autocomplete="off"/>
                </div>
                
                <div class="field-wrap">
                  <label>
                    Set A Password<span class="req">*</span>
                  </label>
                  <input type="password"required autocomplete="off"/>
                </div>
                
                <button type="submit" class="button button-block"/>Get Started</button>
                
                </form>
      
              </div>
              
              <div id="login">   
                <h1>Welcome Back!</h1>
                
                <form action="/" method="post">
                
                  <div class="field-wrap">
                  <label>
                    Email Address<span class="req">*</span>
                  </label>
                  <input type="email"required autocomplete="off"/>
                </div>
                
                <div class="field-wrap">
                  <label>
                    Password<span class="req">*</span>
                  </label>
                  <input type="password"required autocomplete="off"/>
                </div>
                
                <p class="forgot"><a href="#">Forgot Password?></a></p>
                
                <button class="button button-block"/>Log In</button>
                
                </form>
      
              </div>
              
            </div><!-- tab-content -->
            
      </div> <!-- /form -->
   
                 
           
            
        )
    }
}
export default FormElementCombined
