import React from "react"

class FormElementCombined extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '' };
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
        else if (event.target.name === "d") {
            this.setState({ value4: event.target.value })
        }
        else if (event.target.name === "e") {
            this.setState({ value5: event.target.value })
        }
        else if (event.target.name === "f") {
            this.setState({ value6: event.target.value })
        }
        else if (event.target.name === "g") {
            this.setState({ value7: event.target.value })
        }
        else if (event.target.name === "h") {
            this.setState({ value8: event.target.value })
        }
        else if (event.target.name === "i") {
            this.setState({ value9: event.target.value })
        }
        else if (event.target.name === "j") {
            this.setState({ value10: event.target.value })
        }
        else if (event.target.name === "k") {
            this.setState({ value11: event.target.value })
        }
        else if (event.target.name === "l") {
            this.setState({ value12: event.target.value })
        }
    }


    handleSubmit(event) {
       
       // alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
       if (this.state.value1 === '' || this.state.value2 === ''||this.state.value3 === '' || this.state.value4 === ''||this.state.value5 === '' || this.state.value6 === ''||this.state.value7 === '' || this.state.value8 === ''||this.state.value9 === '' || this.state.value10 === ''||this.state.value11 === '' || this.state.value12 === '')
         event.preventDefault();
    }
    render() {
        return (
            <div>
                <form action="http://localhost:9111" onSubmit={this.handleSubmit} name="myform" method="POST">
                    <h1>Proposal Submission Form</h1>
                    <h7> Hi nswaroop@cb.amrita.edu,when you submit this form ,the owner will be able to see your name and email address</h7>
                    <br></br>
                    <h7>* Required</h7>
                    <h3>1.Name of the PI in Amrita *</h3>
                   <input type="text" size='100' value={this.state.value1} placeholder='Enter Your Name' name="a" onChange={this.handleChange} /> <br/><br/>
                    <h3>2.Email Address of PI *</h3>
                    <input type="text" size='100' value={this.state.value2} placeholder='Enter Your answer'  name="b" onChange={this.handleChange} /> <br/><br/>
                    <h3>3.Title of Proposal *</h3> 
                    <input type="text" size='100' value={this.state.value3} placeholder='Enter Your answer' name="c" onChange={this.handleChange} /> <br/><br/>
                    <h3>4.Funding Agency *</h3>
                     <input type="text" size='100' value={this.state.value4} placeholder='Enter Your answer' name="d" onChange={this.handleChange} /> <br/><br/>
                     <h3>5.URL of the call for proposal *</h3>
                      <input type="text" size='100' value={this.state.value5} placeholder='Enter Your answer' name="e" onChange={this.handleChange} /> <br/><br/>
                      <h3>6.Type of the call *</h3>
                      <h6>(International,Travel grant etc)</h6>
                       <input type="text" size='100' value={this.state.value6} placeholder='Enter Your answer' name="f" onChange={this.handleChange} /> <br/><br/>
                       <h3>7.Co-PIs *</h3>
                       <h6>For Co-Pis not in CSE,mention their affiliation(eg:Somasundar,math,Amrita,Dr.Bhardwaj,Deprt of ECE,Nus,Singapore,etc)</h6>
                       <input type="text" size='100' value={this.state.value7} placeholder='Enter Your answer' name="g" onChange={this.handleChange} /> <br/><br/>
                       <h3>8.Amount requested from India side *</h3>
                       <input type="text" size='100' value={this.state.value8} placeholder='Enter Your answer' name="h" onChange={this.handleChange} /> <br/><br/>
                       <h3>9.Proposal review submission date *</h3>
                       <input type="text" size='100' value={this.state.value9} placeholder='Pleace input date in format of M/d/yyyy' name="i" onChange={this.handleChange} /> <br/><br/>
                       <h3>10.Proposal submission date *</h3>
                       <input type="text" size='100' value={this.state.value10} placeholder='Pleace input date in format of M/d/yyyy' name="j" onChange={this.handleChange} /> <br/><br/>
                       <h3>11.Review comments and the status(whether incoporated) *</h3>
                       <input type="text" size='100' value={this.state.value11} placeholder='Enter Your answer' name="k" onChange={this.handleChange} /> <br/><br/>
                       <h3>12.Number of attempts *</h3>
                       <input type="text" size='100' value={this.state.value12} placeholder='Enter Your answer' name="l" onChange={this.handleChange} /> <br/><br/>
 
                                         <button type="submit" value="submit">submit</button>
                            
                </form>
            </div>
        )
    }
}

export default FormElementCombined
