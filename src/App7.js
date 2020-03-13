import React, { Component } from "react";

import "./App7.css";



const emailRegex = RegExp(

  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

);



const formValid = ({ formErrors, ...rest }) => {

  let valid = true;



  // validate form errors being empty

  Object.values(formErrors).forEach(val => {

    val.length > 0 && (valid = false);

  });



  // validate the form was filled out

  Object.values(rest).forEach(val => {

    val === null && (valid = false);

  });



  return valid;

};



class App7 extends Component {

  constructor(props) {

    super(props);



    this.state = {

      firstName: null,

      dob: null,

      gender:null,

      state:null,

      district:null,

      email: null,

      username:null,

      password: null,

      formErrors: {

        firstName: "",

        lastName: "",

        email: "",

        password: ""

      }

    };

  }



  handleSubmit = e => {

    e.preventDefault();



    if (formValid(this.state)) {

      console.log(`

        --SUBMITTING--

         Name: ${this.state.firstName}

         DOB: ${this.state.dob}
         
         Gender: ${this.state.gender}

         State: ${this.state.state}

         District: ${this.state.district}

        Email: ${this.state.email}

        Username: ${this.state.username}

        Password: ${this.state.password}

      `);

    } else {

      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");

    }

  };



  handleChange = e => {

    e.preventDefault();

    const { name, value } = e.target;

    let formErrors = { ...this.state.formErrors };



    switch (name) {

      case "firstName":

        formErrors.firstName =

          value.length < 3 ? "minimum characaters required" : "";

        break;

      case "lastName":

        formErrors.lastName =

          value.length < 3 ? "minimum 3 characaters required" : "";

        break;

      case "email":

        formErrors.email = emailRegex.test(value)

          ? ""

          : "invalid email address";

        break;

      case "password":

        formErrors.password =

          value.length < 6 ? "minimum 6 characaters required" : "";

        break;

      default:

        break;

    }



    this.setState({ formErrors, [name]: value }, () => console.log(this.state));

  };

  getdata=()=>{
    var data= new URLSearchParams();
    data.append("name",this.state.name)
    data.append("dob",this.state.dob)
    data.append("gender",this.state.gender)
    data.append("state",this.state.state)
    data.append("district",this.state.district)
    data.append("email",this.state.email)
    data.append("username",this.state.val)
    data.append("password",this.state.password)
    fetch("http://localhost:8000/signup",{
      method:'post',
      body:data
    })
   .then(response =>{return response.json()})
   .then(response =>{
    this.setState({login:response.log})
    this.displayPage(this.state.login);
   console.log(this.state.login)
})
}

  render() {

    const { formErrors } = this.state;



    return (

      <div className="wrapper">

        <div className="form-wrapper">

          <h1>Create Account</h1>

          <form onSubmit={this.handleSubmit} noValidate>

            <div className="firstName">

              <label htmlFor="firstName">Name</label>

              <input

                className={formErrors.firstName.length > 0 ? "error" : null}

                placeholder="Name"

                type="text"

                name="firstName"

                noValidate

                onChange={this.handleChange}

              />

              {formErrors.firstName.length > 0 && (

                <span className="errorMessage">{formErrors.firstName}</span>

              )}

            </div>

            <div className="dob">

              <label htmlFor="dob">DOB</label>

              <input

                //className={formErrors.lastName.length > 0 ? "error" : null}

                placeholder="dob"

                type="date"

                name="dob"

                noValidate

                onChange={this.handleChange}

              />

              {formErrors.lastName.length > 0 && (

                <span className="errorMessage">{formErrors.lastName}</span>

              )}

            </div>
            <div classname="gender" style={{marginTop:'10px'}}>
            <label htmlFor="gender">GENDER  </label>
            <select 
            name ="gender"
            placeholder="gender"

                type="text"

                name="gender"

                noValidate

                onChange={this.handleChange}><option>Male</option>
                <option>Female</option>
                <option>Other</option></select>
                <br/><br/>


            </div>

            

            <div classname="state" style={{marginLeft:"30px",marginTop:'10px'}}>
            <label htmlFor="state" >STATE</label>
            <select 
            name ="state"
            placeholder="state"

                type="text"

                name="state"

                noValidate

                onChange={this.handleChange}><option>Andhra pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jammu and Kashmir</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarkhand</option>
                <option>West Bengal</option></select>
                <br/><br/>


            </div>

            <br/>
            <div className="district">

              <label htmlFor="district">DISTRICT</label>

              <input

                //className={formErrors.lastName.length > 0 ? "error" : null}

                placeholder="district"

                type="text"

                name="district"

                noValidate

                onChange={this.handleChange}

              />

              {formErrors.lastName.length > 0 && (

                <span className="errorMessage">{formErrors.lastName}</span>

              )}

            </div>
            <br/><br/>
            

            <div className="email"  style={{marginTop:'10px'}}>

              <label htmlFor="email">Email</label>

              <input

                className={formErrors.email.length > 0 ? "error" : null}

                placeholder="Email"

                type="email"

                name="email"

                noValidate

                onChange={this.handleChange}

              />

              {formErrors.email.length > 0 && (

                <span className="errorMessage">{formErrors.email}</span>

              )}

            </div>

            <div className="username">

              <label htmlFor="username">username</label>

              <input

                className={formErrors.firstName.length > 0 ? "error" : null}

                placeholder="username"

                type="text"

                name="username"

                noValidate

                onChange={this.handleChange}

              />

              {formErrors.firstName.length > 0 && (

                <span className="errorMessage">{formErrors.firstName}</span>

              )}

            </div>

            <div className="password"  style={{marginTop:'10px'}}>

              <label htmlFor="password">Password</label>

              <input

                className={formErrors.password.length > 0 ? "error" : null}

                placeholder="Password"

                type="password"

                name="password"

                noValidate

                onChange={this.handleChange}

              />

              {formErrors.password.length > 0 && (

                <span className="errorMessage">{formErrors.password}</span>

              )}

            </div>

            <div className="createAccount">

              <button type="submit">Create Account</button>

              <small>Already Have an Account?</small>

            </div>

          </form>

        </div>

      </div>

    );

  }

}



export default App7;