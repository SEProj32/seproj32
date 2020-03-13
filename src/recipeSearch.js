import React, { Component } from 'react'

export default class recipeSearch extends Component {
    render() {
        const{value,handleChange,handleSubmit}=this.props;
        return (
            <React.Fragment>
               <div className="container">
                   <div className="row">
                       <div className="column-10 mx-auto col-md-8text-capitalize mt-5">
                       <h1 className="text-slanted text-capitalize ">
                           search for recipe with <strong className="text-success">Menu</strong>
                       </h1>
                       <form className="mt-4" onSubmit={handleSubmit}>
                        <label htmlFor="search" className="text-capitalize" >
                            type recipes seperated by comma
                        </label>
                        <div className="input-group"> {/*bootstrap class name*/}
                         <input type="text" name="search" placeholder="panner,onions,carrrots" className="form-control" value={value} onChange={handleChange}/>

                         <div className="input-group-append"> {/*bootstrap class name*/}
                         <button type="submit" className="input-group-text bg-primary text-white">
                             <i className="fas fa-search"/>
                        </button>
                        </div>
                        </div>
                        </form>
                       </div>
                   </div>
               </div>
            </React.Fragment>
        )
    }
}
