import React from 'react';
<<<<<<< HEAD
import ViewRecipe from './ViewRecipe/ViewRecipe';




export default function DeleteRecipe(props) {
  return (

   
      <div className="viewRecipe">
           <h1> Recipe List</h1>
           <ul> 
           { this.state.recipeBox.map (recipeBox =>
             <li key={recipeBox.id}> {recipeBox.recipeName} 
             <br/> <br/> 
            {recipeBox.ingredients} >
      <br/></li>
             )}
     
           </ul>
      </div>
          );
           }
=======

export default function DeleteRecipe() {
  return (
    <div>
     
    </div>
  )
}
>>>>>>> 9e94f940372d4b7ba07bed39503f6ce11475f2ac
