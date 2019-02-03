import React, { Component } from "react";
import ViewRecipe from "./components/ViewRecipe/ViewRecipe";
import axios from "axios";

import "./App.css";
import "../src/components/form/form.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newRecipe: "",
      newIngredients: "",
      currentId: null
    };
  }

  handleChange(e) {
    this.setState({ newRecipe: e.target.value });
    this.setState({ newIngredients: e.target.value });
  }

  handleSubmit() {
    const newRecipeBox = {
      recipeName: this.state.newRecipe,
      ingredients: this.state.newIngredients
    };

    axios.post("/api/AddRecipeBox", newRecipeBox);
  }

  render() {
    return (
      <div>
        <h1 className="h1-recipe">Enter your recipes here</h1>
        <div className="container">
          <form>
            <input
              type="text"
              placeholder=" Recipe Name"
              name="recipeName"
              onChange={e => {
                this.setState({ newRecipe: e.target.value });
              }}
            />

            <br />

            <textarea
              placeholder="Ingredients  "
              type="textarea"
              name="ingredients"
              onChange={e => {
                this.setState({ newIngredients: e.target.value });
              }}
            />

            <br />

            <button className="formBtn" onClick={e => this.handleSubmit(e)}>
              {" "}
              Add{" "}
            </button>

            <button className="formBtn" onClick={e => this.handleCancel}>
              {" "}
              Cancel{" "}
            </button>
          </form>

          {/* <ViewRecipe/> */}
          <ViewRecipe />
        </div>
      </div>
    );
  }
}

export default App;
