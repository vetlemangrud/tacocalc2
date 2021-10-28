
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
        <div className="countForm">
          <label>Hvor mange skal spise?</label><br />
          <input type="number" onChange={(e) => {
            setPeople(e.target.value);
          }} min="1" max="999"/>
        </div>
        
        <div className="ingredients">
          <h2>Ingredienser</h2>
          <div className="main">
            {ingredients.main.map((ingredient) => <Ingredient ingredient={ingredient} personer={people}/>)}
          </div>
          <h2>Guacamole</h2>
          <div className="guacamole">
            {ingredients.guacamole.map((ingredient) => <Ingredient ingredient={ingredient} personer={people}/>)}
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default App;
