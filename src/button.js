import React from "react"
import { type } from "os";
class button extends React.Component{
    render()
    {
        return(
            React.createElement("button",{onClick:function(){alert("You clicked");}}
            )
        )
    }
}
export default button