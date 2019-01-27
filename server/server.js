const  express = require ('express');
const app = express();
bodyParser = require ('body-parser'),
cors = require ('cors')


app.use(bodyParser.json ())
app.use(cors())

/* get starts ...*/

<<<<<<< HEAD
let nextId =2;
=======
let nextId =3;
>>>>>>> 9e94f940372d4b7ba07bed39503f6ce11475f2ac
let recipeBox = [
   {
       id: 1,
       recipeName: "Chicken",
       ingredients : "Heat olive oil in a skillet over medium heat. Saute onion until lightly browned. Stir in garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar and salt. Continue stirring for 2 minutes. Add chicken pieces, tomato paste, yogurt, and coconut milk. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes."
   } ,

   {
   id: 2,
       recipeName: "squash",
       ingredients : "Heat olive oil in a skillet over medium heat. Saute onion until lightly browned. Stir in garlic"
}

]


app.get ('/api/recipeBox', (req,res) => {
    res.status(200).send(recipeBox)
})
<<<<<<< HEAD
/* get  end...*/
=======
>>>>>>> 9e94f940372d4b7ba07bed39503f6ce11475f2ac


app.post ('/api/AddRecipeBox', (req,res) => {
    console.log("your list !")

    const newRecipe = {
        id: nextId++,
        recipeName: req.body.recipeName,
        ingredients: req.body.ingredients
    }
recipeBox.push(newRecipe)

res.status(201).send();
console.log(newRecipe)
<<<<<<< HEAD
} );

// update 

app.put ('/api/updateRecipeBox/:id', (req,res) => {
recipeBox.ingredients =req.body.name
res.status(200).send(recipeBox)
});


// Delete

app.delete('/api/updateRecipeBox/:id', (req,res) => {

recipeBox.splice(id,1);
res.status(200).send(recipeBox)

});
=======
} )




/* get  end...*/

>>>>>>> 9e94f940372d4b7ba07bed39503f6ce11475f2ac

const port = 3333;
app.listen(port, () =>{
    console.log("listening on port " + port)
})