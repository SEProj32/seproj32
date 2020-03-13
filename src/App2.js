import React, { Component } from 'react'
import "./App2.css"
import {recipes} from './tempList'
import RecipeList from './recipeList'
import RecipeDetails from './recipeDetail'
export default class App2 extends Component {
    state={
        recipes:recipes,
        url:"https://www.food2fork.com/api/search?key=925491a1b07456c1aac41ae0c4e2d5ef",//api
        base_url:"https://www.food2fork.com/api/search?key=925491a1b07456c1aac41ae0c4e2d5ef",
        details_id:35375,
        pageIndex:1,
        search:'',
        query:'&q=',
        error:''
    };
    async getRecipes()//normally every function in react is ascynchronus but to be done in a sync manner we are using await so that it will be done step by step
    {
        try{
        const data=await fetch(this.state.url);//fetchapi 
        const jsonData=await data.json();
        if(jsonData.recipes.length===0)
        {
          this.setState(()=>{     //if wrong search is done then the error message is to be printed
              return {error:'sorry,but  your search did not return any results'}
                })
        }
        else {
        this.setState({
        recipes:jsonData.recipes//recipes in api are mapped to recipes array by setting the state
        });
             }
           }
    catch(error)
        {
            console.log(error);
        }
    }

componentDidMount()//when it is called
{
    this.getRecipes()
}

displayPage=(index) =>//displayPage is a function with some flag variable(index) as a param
{
    switch(index){
        default:
        case 1:
            return (<RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails} value={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error}/>)
        case 0:
            return (<RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex}/>) 
    }
}

handleIndex= (index)=>{
this.setState({
    pageIndex:index
})
}
handleDetails= (index,id)=>{
    this.setState({
        pageIndex:index,
        details_id:id
    })
    }
    handleChange=(e)=>{                           //for search from recipe list
        this.setState({
            search:e.target.value
        },()=>
            {
             console.log(this.state.search);
            })
    }
    handleSubmit=(e)=>{                           
        e.preventDefault();//to prevent page from getting refreshed after submission
        const{base_url,query,search}=this.state;
        this.setState(()=>{
           return {url:`${base_url}${query}${search}`,search:""}
        },()=>
        {
            this.getRecipes();  //call back function means each time we make change in search bar this function is called
        })
    }
    render() {
        // console.log(this.state.recipes)
        return (
        <React.Fragment>
         {this.displayPage(this.state.pageIndex)} 
        </React.Fragment>
        )
    }
}
