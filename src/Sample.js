import React from 'react'
import './St.css';
class Sample extends React.Component{
  constructor()
      {
        super();
        this.state={value1:'',buttonname:''}
        this.handler=this.handler.bind(this)
        this.sam=this.sam.bind(this)
      }    
      handler(event){
        if(event.target.name=="username")
       this.setState({value1:event.target.value})
       else
       this.setState({value2:event.target.value})
      }
      
      handlevalid(event)
      {
        let value1=this.state.value1;
         let value2=this.state.value2;
         let valid=true;
       if(!value1)
       {
           valid=false;
       }
       if(!value2.match( 'hi'))
       {
          valid=false;
       }
             return valid;
      }
      sam(event){
        if(this.handlevalid())
        alert("successfull"+this.state.value1)
        else
        alert("invalid");
        event.preventdefault();  
           }
           log(props)
           {
            if(this.handlevalid())
            this.setState({buttonname:'login'})
            else
             this.setState({buttonname:'logout'})
           }
  render()
    {
        return(
          <div>
            <form onSubmit={this.sam} link action="https://www.google.co.in/">
            <input type="text" name="username" value={this.state.value1} onChange={this.handler}/>
            <br></br>
            <input type="text" name="password" value={this.state.value2} onChange={this.handler}/>
            <br/>
            <input type="submit" value={this.buttonname}/>
            </form>
          </div>
          
                     )  
    }
}
export default Sample