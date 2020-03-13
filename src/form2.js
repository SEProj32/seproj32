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
            <div style={{marginLeft:"100px",textAlign:"center",borderRadius:"30px"}}>
                <form action="https://zrw67gufzd.execute-api.us-east-1.amazonaws.com/s1/r1"  name="myform" method="POST">
                    <h1 >Please provide ur email and please give ur valuble comment</h1>
                    <div style={{border:"1px solid #a1a3a3",padding:"10px",borderRadius:"30px"}}>
                    Username : <input type="text"  name="username"  /> <br/><br/>
                    Password : <input type="text"  name="password"  /> <br/><br/>
                    email : <input type="text"  name="email" /> <br/><br/>
                    Comment : <input type="text"  name="comment" /> <br/><br/>
                    <input type="submit" value="submit" />
                    </div>
                </form>
            </div>
        )
    }
}
export default Form1