
import React, { useState } from "react";
import './App.css';
import ingredients from './ingredientData.js';
import Ingredient from './components/Ingredient.js'

function App() {
  const [people, setPeople] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <h1>🌮 Tacokalkulator 2: Electric Boogaloo 🌮</h1>
      </header>
      <main>
        <label>Hvor mange skal spise?</label><br />
        <input type="text" onChange={(e) => {
          setPeople(e.target.value);
        }}/><br/>
        <h2>Ingredienser</h2>
        <div className="ingredients">
          {ingredients.main.map((ingredient) => <Ingredient ingredient={ingredient} personer={people}/>)}
        </div>
        <h2>Guacamole</h2>
        <div className="guacamole">
          {ingredients.guacamole.map((ingredient) => <Ingredient ingredient={ingredient} personer={people}/>)}
        </div>
      </main>
    </div>
  );
}

export default App;
