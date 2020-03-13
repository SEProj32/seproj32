import React from 'react'
class form extends React.Component{
    constructor(props)
    {
        super(props);
        this.setState={value1:''};
        this.setState={value2:''};
        this.handlechange=this.handlechange.bind(this)
        this.handlevalid=this.handlevalid.bind(this)
        this.alt=this.alt.bind(this);
    }
    handlechange(event){
        if(event.target.name==='us')
        this.setState({value1:event.target.value})
        else
        this.setState({value2:event.target.value})

    }
    handlevalid(event)
    {
      /* let value1=this.state.value1;
       let value2=this.state.value2;
       let valid=true;
     if(!value1)
     {
         valid=false;
     }
     if(!value2.match( '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/'))
     {
        valid=false;
     }*/
         return " ";
    }

    alt(event){
        if(this.handlevalid())
        alert("successfull"+this.state.value1)
        else
        alert("invalid");
        event.preventdefault();  

           }
        render()
    {
       return(
        <div>
        <form onSubmit={this.sam}>
        <input type="text" name="us" value={this.state.value1} onChange={this.handlechange}/>
        <br></br>
        <input type="text" name="pass." value={this.state.value2} onChange={this.handlechange}/>
        <br/>
        <input type="submit" value="submit"/>
        <input type="submit" value="submit1"/>
        </form>
      </div>
    )
}
}
export default form