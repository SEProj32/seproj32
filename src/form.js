import React from "react"
import './form.css'
class FormElementCombined extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '',value3:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name === "a") {
            this.setState({ value1: event.target.value })
        }
        else if (event.target.name === "b") {
            this.setState({ value2: event.target.value })
        }
        else if (event.target.name === "c") {
            this.setState({ value3: event.target.value })
        }
    }

    handleSubmit(event) {
       
       // alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
       if (this.state.value1 === '' || this.state.value2 === ''|| this.state.value2 === '')
       event.preventDefault();
    }
    render() {
        return (
            <div>
                <form action="http://localhost:8081/" onSubmit={this.handleSubmit} name="myform" method="get" enctype="multipart/form-data">
                    <hr></hr>
                    <h1>Shipping Info</h1>
                    <h6>*Required</h6>
                    <br></br>
                    <h3>Product Name*</h3>
                    <input type="text" value={this.state.value1} name="a" placeholder="Your answer" onChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <h4>Shipping City Zipcide*</h4>
                    <h6>Zip code of a city in USA</h6>
                    <input type="text" value={this.state.value2} name="b" placeholder="Your answer" onChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <h4>Phone number*</h4>
                    <input type="number" value={this.state.value3} name="c" placeholder="Your answer" onChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <h4>Phone Image*</h4>
                   <div><input type="file" name="loc" accept="image/*" onBlur={this.handlelocChange}  required /></div> 
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
export default FormElementCombined
