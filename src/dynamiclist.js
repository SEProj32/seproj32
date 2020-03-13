import React from 'react';
import Nl from "./NL"
import list from "./nameList"
function DynamicList (){
    const mylist=list.map(listitem => <Nl key={listitem.Id} rollno={listitem.Roll_No} name={listitem.Name} /> )
    return(
    <div>
    {mylist}
    </div>
    )}
    export default DynamicList