import React, { Component } from "react";
import axios from "axios";
import "../ViewRecipe/viewRecipe.css";

class ViewRecipe extends Component {
  constructor() {
    super();
    this.state = {
      recipeBox: [],
      id: ""
    };
  }

  getRecipeList() {
    axios.get("/api/recipeBox").then(res => {
      this.setState({
        recipeBox: res.data
      });
    });
  }

  componentDidMount() {
    this.getRecipeList();
  }

  handleDelete = recipe => {
    console.log(recipe);

    axios.delete("/api/updateRecipeBox/id:").then(res => {
      this.getRecipeList();
    });
  };

  render() {
    return (
      <div className="viewRecipe">
        <h1> Recipe List</h1>
        <ul>
          {this.state.recipeBox.map(recipe => (
            <li key={recipe._id}>
              {" "}
              {recipe.recipeName}
              <button
                className="delete_button"
                onClick={() => this.handleDelete(recipe)}
              >
                X
              </button>
              <br /> <br />
              {recipe.ingredients} <br /> <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ViewRecipe;
