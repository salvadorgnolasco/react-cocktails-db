import { mapResponseDetailed } from '../Utils';

import { useParams } from 'react-router-dom';
import React from 'react';


function CocktailPage() {

  const { id } = useParams();
  const [drink, setDrink] = React.useState({
    id: id,
    name: "",
    ingredients: [],
    instructions: [],
  });

  React.useEffect(
    () => {
      async function getCocktail() {      
        try {
          const cocktail = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.id}`);
          const data = await cocktail.json();
          const { drinks } = data;
          const oneDrink = mapResponseDetailed(drinks)[0];
          setDrink(oneDrink);
        } catch (error) {
          console.log(error);
        }
      }
      getCocktail();
    });


  const ingredients = drink.ingredients.filter(item => item !== null).map((item, i) => <li key={i}>{item}</li>);
  const instructions = drink.instructions.map((item, i) => <li key={i}>{item}</li>);

  return (

    <section className="w-100 d-flex justify-content-center">
      <div className="w-75 ">
        <h3 className="text-center mt-3">{drink.name}</h3>
        <article className="single-cocktail">
          <img src={drink.img} alt={drink.name}></img>
          <div className="summary">

            <h6>Ingredients: </h6>
            <ul>
              {ingredients}
            </ul>
          </div>
          <div className="preparation">
            <h6>Preparation: </h6>
            <ul className="text-justify">
              {instructions[0]}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default CocktailPage;
