function Ingredient(props) {
    const mengde = Math.ceil(props.personer * props.ingredient[2])
    return (
        <div className="ingredient">{mengde + " " + props.ingredient[mengde == 1 ? 0 : 1]}</div>
    );
  }
  
  export default Ingredient;