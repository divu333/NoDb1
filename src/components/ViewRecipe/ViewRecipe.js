import React, { Component } from "react";
import axios from "axios";
import "../ViewRecipe/viewRecipe.css";

class ViewRecipe extends Component {
  constructor() {
    super();
    this.state = {
      recipeBox: []
    };
    this.deleteRecipe = this.deleteRecipe.bind(this);
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

  deleteRecipe() {
    axios.delete("/api/updateRecipeBox/id:").then(res => {
      this.setState({
        recipeBox: res.data
      });
    });
  }

  render() {
    return (
      <div className="viewRecipe">
        <h1> Recipe List</h1>
        <ul>
          {this.state.recipeBox.map(recipeBox => (
            <li key={recipeBox.id} id={recipeBox.id}>
              {" "}
              {recipeBox.recipeName}
              <button className="delete_button" onClick={this.deleteRecipe}>
                X
              </button>
              <br /> <br />
              {recipeBox.ingredients} <br /> <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ViewRecipe;
