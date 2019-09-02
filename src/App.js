import React, {Component} from 'react';
import "./App.css";
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


class App extends Component{
  state = {
    // recipes : [],
    recipes : recipes,
    url : "https://www.food2fork.com/api/search?key=d622f79433a3739851e31fe926a2b759"
  };

  // // we are using async for making everthing work ayncronizly
  // async getRecipe(){
  //   try{
  //     const data = await fetch(this.state.url);
  //     // converting data into json
  //     const jsonData = await data.json();
  //
  //     // setting the State
  //     this.setState({
  //       recipes : jsonData.recipes
  //     });
  //   }catch(error){
  //     console.log(error);
  //   }
  // }
  //
  // // this componentdidmount method will get executed whenever the App component get mounted
  // componentDidMount(){
  //   this.getRecipe();
  // }

  render(){
    // console.log(this.state.recipes);
    return(
      <React.Fragment>
        <RecipeList
          // passing the props
          recipes = {this.state.recipes}
        />
        <RecipeDetails/>
      </React.Fragment>
    );
  }
}

export default App;
