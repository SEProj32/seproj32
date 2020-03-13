import React, { Component } from 'react'
import RecipeSearch from './recipeSearch'
import Recipe from './recipe'
export default class recipeList extends Component {
     render() {
        const {recipes,handleDetails,handleSubmit,handleChange,value,error} = this.props;
        return (
            <React.Fragment>
            <RecipeSearch handleChange={handleChange} handleSubmit={handleSubmit} value={value}/>
           <div className="container my-5"> {/*container,row classes from bootstrap my-margin */}
           {/* title*/}
           <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase my-3">  {/*columns max-auto means it to be at center in medium screen 6 margin 3 */}
            <h1 className="text-slanted"> recipe List</h1>{/* unable to get the font doubt*/ }
            </div>
           </div>
           <div className="row">
               {error?<h1 className="text-danger text-center">{error}</h1>:recipes.map(recipe =>{
                       return <Recipe key={recipe.recipe_id } recipe={recipe} handleDetails={handleDetails}/>;
                   })}
           </div>
           {/* end of title*/}
           </div>
            </React.Fragment>
        )
    }
}
