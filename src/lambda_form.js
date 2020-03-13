import React from "react"
import "./lambda_form.css"
class Sample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '',value3:'',value4: '', value5: '',value6:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name === "name") {
            const re = /^[a-z\b]+$/;
            if (event.target.value === '' || re.test(event.target.value)) {
               this.setState({value1:event.target.value})
            }
        }
        else if (event.target.name === "cardnumber") {
            const re = /^[0-9]{1,10}$/;
            if (event.target.value === '' || re.test(event.target.value)) {
               this.setState({value2:event.target.value})
            }
        }
        else if (event.target.name === "date") {
            const re =  /^[0-9]{0,2}$/;
        if ( event.target.value === '' || re.test(event.target.value) ) {
           this.setState({value3:event.target.value})
        }
        }
        else if (event.target.name === "month") {
            const re =  /^[0-9]{0,2}$/;
        if (event.target.value === '' || re.test(event.target.value)) {
           this.setState({value4:event.target.value})
        }
        }
        else if (event.target.name === "year") {
            const re =  /^[0-9]{0,4}$/;
        if (event.target.value === '' || re.test(event.target.value)) {
           this.setState({value5:event.target.value})
        }
        }
        else if (event.target.name === "code") {
            const re = /^[0-9]{0,4}$/;
        if (event.target.value === '' || re.test(event.target.value)) {
           this.setState({value6:event.target.value})
        }
        }
    }

    handleSubmit(event) {
       // alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
        if (this.state.value1 === '' || this.state.value2 === '')
            event.preventDefault();
    }
    render() {
        return (
            <div >
                <form action=" https://fhpt2z3162.execute-api.us-east-1.amazonaws.com/doublelambda/" onSubmit={this.handleSubmit} name="myform" method="POST">
                  <h3 style={{marginLeft:"100px",marginTop:"20px"}}>Secure Payment Info</h3>
                    <p style={{marginTop:"30px",marginLeft:"10px"}}>Name<input type="text" value={this.state.value1} name="name" onChange={this.handleChange} style={{marginLeft:"80px",width:"350px"}}></input></p>  <br/><br/>
                    <p  style={{marginLeft:"20px"}}>Card Number<input type="text" value={this.state.value2} name="cardnumber" onChange={this.handleChange} style={{marginLeft:"120px",width:"350px"}} /></p> <br/><br/>
                    <p  style={{marginLeft:"20px"}}>Expiration Date <input type="text" value={this.state.value3} name="date" placeholder="Date" onChange={this.handleChange} style={{marginLeft:"20px",width:"50px"}} /> 
                    <input type="text" value={this.state.value4} name="month"placeholder="Month" onChange={this.handleChange}  style={{marginLeft:"20px",width:"50px"}}/> 
                    <input type="text" value={this.state.value5} name="year" placeholder="Year" onChange={this.handleChange}  style={{marginLeft:"20px",width:"50px"}}/></p> <br/><br/>
                    <p  style={{marginLeft:"20px"}}>Security Code
                    <input type="text" value={this.state.value6} name="code" onChange={this.handleChange}  style={{marginLeft:"40px",width:"50px"}}/> </p><br/><br/>
                    <input type="submit" value="submit" style={{marginLeft:"200px",marginBottom:"30px"}}/>
                </form>
            </div>
        )
    }
}
export default Sample