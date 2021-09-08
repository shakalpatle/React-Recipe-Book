import React, { useEffect, useState } from "react"
import './App.css';
import Recipe from "./Recipe";
import Head from "./Head";
import Footer from "./Footer";


const App = () => {

  const APP_ID = "42d7fe1a";
  const APP_KEY = "691ab86eadaabd5f25aa1c433c14a834";

 
 const [recipes,setRecipe] = useState([]);
 const [search , setSearch] = useState('')
 const [query , setQuery] = useState('chicken')

  useEffect(() => {
    getRecipe();
  }, [query]);




  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipe(data.hits);
    
  }
const updateSearch = (e) => {
  setSearch(e.target.value)
}

const getSearch = (e) => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  console.log(recipes);

  return (
    <div className="App">
      <Head/>
      <form onSubmit={getSearch}className="search-form">
        <input className="search-text" type="text" value={search} onChange = {updateSearch} placeholder="Enter the item whose recipe you want"></input>
        <button className="search-button" type="submit">Search</button>
      </form>
    <div className="recipes">
    { recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title = {recipe.recipe.label} calories = {recipe.recipe.calories}  im = {recipe.recipe.image} ingredients = {recipe.recipe.ingredients} /> 
      ))
      }
    </div>
      <div className="foot"><Footer/></div>
      
    </div>
  );
};

export default App;
