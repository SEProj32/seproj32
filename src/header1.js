import React from 'react'
import Body from  './body1'

class header extends React.Component{
    render()
    {
        return(
        <div>
            <h1 class="h"><i>ADD NEW EMPLOYEE</i></h1>
            <Body/>
        </div>
        )
    }
}
export default header