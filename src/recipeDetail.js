import React, { Component } from 'react'
import Recipe from './recipe'
import Recipe1 from './recipeSearch'
import {recipe} from './tempdetails'
export default class recipeDetail extends Component {
//     constructor(props)
//     {
//         super(props)

//         this.state={
//             recipe:recipe,
//         url:`https://www.food2fork.com/api/get?key=925491a1b07456c1aac41ae0c4e2d5ef&rId=${this.props.id}`}; {/*doubt url not proper in youtube seek time=1:26:28 */}
//     }
//  async componentDidMount()
// {
//     try{
//         const data=await fetch(this.state.url);//fetchapi 
//         const jsonData=await data.json();
//         this.setState({
//         recipe:jsonData.recipe//recipes in api are mapped to recipes array by setting the state
//         });
//            }
//     catch(error)
//         {
//             console.log(error);
//         }
// }
state={
    recipe:recipe
}
async componentDidMount()
{
   const id=this.props.id;
   const url=`https://www.food2fork.com/api/get?key=925491a1b07456c1aac41ae0c4e2d5ef&rId=${id}`;
   try{
            const data=await fetch(url);//fetchapi 
            const jsonData=await data.json();
            this.setState((state,props)=>{  //state and props are the parameters passed to the function where props are the props of the cuurent class and state is the current state used foe setting a value to a variable but not used in this case.this .setState is async so we wouldn't get get data as soon as we ask for it so we use call back function for getting the value
                return {recipe:jsonData.recipe}  //this the another way to set state done by using function
            },()=>{ });//call  backn function is the one after the comma
               }
        catch(error)
            {
                console.log(error);
            }
}
    render() {
       const{
           image_url,publisher,publisher_url,source_url,title,ingredients
       }=this.state.recipe;
       const{handleIndex}=this.props
        return (
            <React.Fragment>
            <div className="container "> 
        
           <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase my-3">  
            <button type="button" className="btn btn-warning mb-5 text-capitalize" onClick={()=>handleIndex(1)}>back to recipe list</button>
            <img src={image_url} className="d-block w-100" alt="recipe"/>
            </div>
            {/*details*/}
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase my-3">  
           <h6 className="text-uppercase">{title}</h6>
           <h6 className="text-warning text-capitalize text-slanted">provided by {publisher}</h6>
           <a href={publisher_url}
           target="_blank" className="btn btn-primary mx-2 text-capitalized" rel="noopener noreferrer">publisher web page</a>{/*target blank allows us to open the link in a new tab */}
           <a href={source_url}
           target="_blank" className="btn btn-success mx-2 text-capitalized" rel="noopener noreferrer">recipe url</a>
           <ul className="list-group mt-4">
           <h2 className="mt=3 mb=4 ">Ingredients</h2>
           {
               ingredients.map((item,index)=>{
                   return(
                       <li key={index} className="list-group-item text-slanted">{item}</li>
                   )               })
           }
           </ul>
            </div>
           </div>     
           </div>      
        </React.Fragment>
        )
    }
}
