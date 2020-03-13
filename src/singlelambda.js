import React from 'react';

class Lambform extends React.Component {

  
    render() {
        return(
            <div>
                 <form action=" https://7nj3vmbiza.execute-api.us-east-1.amazonaws.com/single/"  name="myform" method="GET">
                 p_id: <input type="text"  name="pid" /> <br/><br/> 
                 name: <input type="text"  name="name" /> <br/><br/>
                 quantity: <input type="text"  name="quan" /> <br/><br/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
export default Lambform