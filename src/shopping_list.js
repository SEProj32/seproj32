import React from 'react'

class Shop extends React.Component {

    render()
    { 
        var date=new Date();
        var say;
        if(date.getHours()<12)
        {
            say="Good m";
        }
        else
        {
            if(date.getHours()%12<3)
            {
                say="g a";
            }
            else
            say="g n";
               }
        const st={
            backgroundColor:"grey"
        }

        st.color="orange"
        const lname="h"
        return(
            
            React.createElement("div",null,
                React.createElement("h1",{style:{color:"red",backgroundColor:"blue"}},"this is my list"),
                React.createElement("ul",null,
                    React.createElement("li",{className:'cla'},"list1"),
                    React.createElement("li",null,"list2"),
                                                         
                    <h1 style={st}>hellos</h1>,
                    <h1 >kk {lname+" "+lname+" "+say} </h1>,
                   
                 
            )
            )
            
            
        )
    }
}
export default Shop