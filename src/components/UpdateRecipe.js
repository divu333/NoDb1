import React, { Component } from 'react';
import axios from 'axios';

export default  class UpdateRecipe extends Component  {

constructor(){
  super()
  this.state = {
    recipeBox :[]
  }
}


componentDidMount () {

  axios.get('/api/recipeBox').then ((res) => {
     console.log(res.data)
     this.setState ({
      recipeBox : res.data
     })
  })

}
render(){ 


    
  return ( 
   
 <div className="viewRecipe">
      <h1> Recipe List</h1>
      <ul> 
      { this.state.recipeBox.map (recipeBox =>
        <li key={recipeBox.id}> {recipeBox.recipeName}<br/> <br/> 
        {recipeBox.ingredients} <br/>  <br/></li>

        )}

      </ul>
 </div>
     );
   }

 }