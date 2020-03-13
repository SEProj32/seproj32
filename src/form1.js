import React from 'react';

class Form1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value1: '', value2: '', value3: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name === "username"){
            this.setState({ value1: event.target.value })}
        else if(event.target.name === "password") {
            this.setState({ value2: event.target.value })
        }
        else if(event.target.name === "msg") {
            this.setState({ value3: event.target.value })
        }
    }

    handleSubmit(event) {
        // alert('A detailas submitted: ' + this.state.value1 + " " + this.state.value2);
        if (this.state.value1 === '' || this.state.value2 === '' )
            event.preventDefault();
    }
    render() {
        return (
            <div>
                <form action="https://zrw67gufzd.execute-api.us-east-1.amazonaws.com/s1/r1"  name="myform" method="POST">
                    Username : <input type="text"  name="username"  /> <br/><br/>
                    Password : <input type="text"  name="password"  /> <br/><br/>
                    Message : <input type="text"  name="message" /> <br/><br/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
export default Form1