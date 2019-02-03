const express = require("express");
const app = express();
(bodyParser = require("body-parser")), (cors = require("cors"));

app.use(bodyParser.json());
app.use(cors());

/* get starts ...*/

let nextId = 2;
let recipeBox = [
  {
    id: 1,
    recipeName: "Chicken",
    ingredients:
      "Heat olive oil in a skillet over medium heat. Saute onion until lightly browned. Stir in garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar and salt. Continue stirring for 2 minutes. Add chicken pieces, tomato paste, yogurt, and coconut milk. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes."
  },

  {
    id: 2,
    recipeName: "squash",
    ingredients:
      "Heat olive oil in a skillet over medium heat. Saute onion until lightly browned. Stir in garlic"
  }
];

app.get("/api/recipeBox", (req, res) => {
  res.status(200).send(recipeBox);
});
/* get  end...*/

app.post("/api/AddRecipeBox", (req, res) => {
  console.log("your list !");

  const newRecipe = {
    id: nextId++,
    recipeName: req.body.recipeName,
    ingredients: req.body.ingredients
  };
  recipeBox.push(newRecipe);

  res.status(201).send();
  console.log(newRecipe);
});

// update

app.put("/api/updateRecipeBox/:id", (req, res) => {
  recipeBox.ingredients = req.body.name;
  res.status(200).send(recipeBox);
});

// Delete

app.delete("/api/updateRecipeBox/:id", (req, res) => {
  let index = null;
  recipeBox.forEach((recipe, i) => {
    if (recipe.id === Number(req.id)) index = i;
  });
  recipeBox.splice(index, 1);
  res.status(200).send(recipeBox);
});

const port = 3333;
app.listen(port, () => {
  console.log("listening on port " + port);
});
