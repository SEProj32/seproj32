import React from 'react'

class Body extends React.Component{
    constructor(props){
        super(props);
 
        this.state = {
            fields:[],
            errors: []
        };
        this.contactSubmit = this.contactSubmit.bind(this)
        this.clr=this.clr.bind(this);
     }
     handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        //Id
        if(!fields["id"]){
            formIsValid = false;
            errors["id"] = "Cannot be empty";
         }
 
         if(typeof fields["id"] !== "undefined"){
            if(!fields["id"].match(/^[0-9]+$/)){
               formIsValid = false;
               errors["name"] = "Only Numbers";
            }        
         }
 

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }

        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
           }        
        }

       this.setState({errors: errors});
       return formIsValid;
   }

   contactSubmit(e){


        if(this.handleValidation()){
           alert("Form submitted");
           
        }else{
           alert("Form has errors.")
        }
     e.preventdefault();  
    }
    clr(event){
      let fields = this.state.fields;
      fields["id"] = " ";        
      fields["name"] = " ";      
      fields["Qualification"] = " ";      
      fields["salary"] = " ";      
      this.setState({fields});
   }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields = e.target.value;        
        this.setState({fields});
    }
   
    render()
    {
        return(
        <div>
             <form link action='http://google.com'  onSubmit= {this.contactSubmit}>
            <pre>Employee Id:       <input ref="id" type="text" size="30" placeholder="id" onChange={this.handleChange.bind(this, "id")} value={this.state.fields["id"]}/> </pre>
            <pre>Employee Name:       <input ref="name" type="text"  size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/> </pre>
            <pre>Qualification:       <input ref="Qualification"  type="text" size="30" placeholder="Qualification" onChange={this.handleChange.bind(this, "Qualification")} value={this.state.fields["Qualification"]}/> </pre>
            <pre>Designation:        <select  >
                                     <option>SalesBoy</option>
                                     <option>Manger</option>
                                     <option>CEO</option>
                                     </select>
                                     </pre>
            <pre>salary:             <input ref="salary" type="text"value={this.state.value4} size="30" placeholder="salary" onChange={this.handleChange.bind(this, "salary")} value={this.state.fields["salary"]}/> </pre>
            <br></br>
            <br></br>
            
               
           <button type="button" value="Exit"/> 
          <button type="submit" value="addrecord"/>
        
            </form>
            
           
           
                        </div>
        )
    }
}
export default Body