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

handleUpdate(){

const editedItem = {
  name: this.state.recipeName
};

axios.put('/api/recipeBox/' + this.state.currentId, editedItem).then(() => {
});
}



render(){ 


    
  return ( 
   
 <div className="viewRecipe">
      <h1> Update Recipe</h1>
      <div className="update-recipe">
      <ul> 
        
      { this.state.recipeBox.map (recipeBox =>
        <li key={recipeBox.id}> {recipeBox.recipeName}<button className="edit-recipe" onClick ={e => this.handleUpdate(e)} > Edit</button> <br/> <br/> 
     </li>

        )}

      </ul>
      </div>
 </div>
     );
   }

 }