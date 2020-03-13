import React from 'react'
function Nl(props){
const styles={
position: "fixed",
left: "200px"
}
return(
<div>
<p> Roll number of the student <span style={styles}> {props.rollno}</span></p>
<p> Name of the student <span style={styles}>{props.name}</span> </p>
<hr/>
</div>
)}
export default Nl