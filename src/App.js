import React, { Component } from 'react';
<<<<<<< HEAD
import ViewRecipe from './components/ViewRecipe/ViewRecipe';
import axios from 'axios';
import form from './components/form/form.css';
=======
import './App.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import router from './router';
>>>>>>> 9e94f940372d4b7ba07bed39503f6ce11475f2ac

class App extends Component {
  

  
<<<<<<< HEAD
  
  constructor(){
    super()
    this.state = {
        newRecipe : '',
        newIngredients: '',
        currentId: null,

    }
}



   
handleChange(e) {
    this.setState({ newRecipe:e.target.value})
    this.setState({ newIngredients:e.target.value})
}

  


handleSubmit () {
    
    const newRecipeBox = {
        recipeName: this.state.newRecipe,
        ingredients:this.state.newIngredients
    }

axios.post('/api/AddRecipeBox',newRecipeBox)
    }
      
    
handleCancel (){

    const newRecipeBox = {
        recipeName: "",
        ingredients:""
    }
}

  
    render() {

    return ( 

      <div>
        <h1 className="h1-recipe">Enter your recipes here</h1>
        <div className="container">
        <form >
              
                <input
                type = "text"
                        placeholder =" Recipe Name"
                        name="recipeName"
                        onChange={(e) =>{ this.setState({newRecipe:e.target.value })}} 
                    />
                    
         <br/>
                   
                    

                    <textarea 
                    placeholder ="Ingredients  "
                    type="textarea"
                     name="ingredients" 
                      onChange={(e) =>{ this.setState({newIngredients:e.target.value })}} 
                      />

               <br/>

               <button className ="formBtn"onClick ={e => this.handleSubmit(e)} > Add </button>
              
               
               <button className ="formBtn" onClick ={e => this.handleCancel} > Cancel  </button>               
        </form>

       {/* <ViewRecipe/> */}
       <ViewRecipe recipeBox = {this.state.recipeBox} />
        </div>
        </div>
    );

    }
}
 

export default App;

=======
 
  render(){ 
     return ( 
       <Router>
     <div className = "App">
     <div className="ListWrapper">
     <div className="logo"> </div>
    
       <nav>
          <ul className="nav-bar">
          <li className="navrBar-item"> <Link to='/CreateRecipe' style={{ textDecoration: 'none' }} >Add New recipe</Link></li>
          <br/>
            <li className="navrBar-item"> <Link to='/UpdateRecipe' style={{ textDecoration: 'none' }} >Update Recipes</Link></li>
          <br/>
            <li className="navrBar-item"> <Link to='/ViewRecipe' style={{ textDecoration: 'none' }} >Show Recipes</Link></li>
            <br />
            <li className="navrBar-item"><Link to='/DeleteRecipe' style={{ textDecoration: 'none' }}>Delete Recipe</Link></li> 
          </ul>
        </nav>

        
        {router}
     </div>
     
      </div>

      </Router>

        );
      }

    }
  

export default App;


>>>>>>> 9e94f940372d4b7ba07bed39503f6ce11475f2ac
