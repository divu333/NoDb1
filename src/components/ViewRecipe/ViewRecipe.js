import React, { Component } from 'react';
import axios from 'axios';
import viewRecipe from '../ViewRecipe/viewRecipe.css'

class  ViewRecipe extends Component  {

<<<<<<< HEAD
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




=======
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
>>>>>>> 9e94f940372d4b7ba07bed39503f6ce11475f2ac
export default ViewRecipe;
