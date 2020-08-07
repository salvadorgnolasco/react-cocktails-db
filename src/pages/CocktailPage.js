import { mapResponseDetailed } from '../Utils';

import { useParams } from 'react-router-dom';
import React from 'react';


function CocktailPage() {

  const [drink, setDrink] = React.useState({
    id: 0,
    name: "",
    ingredients: [],
    instructions: [],
  });

  const { id } = useParams();

  React.useEffect(
    () => {
      async function getCocktail() {
        try {
          const cocktail = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
          const data = await cocktail.json();
          const { drinks } = data;
          const drink = mapResponseDetailed(drinks)[0];
          setDrink(drink);
        } catch (error) {
          console.log(error);
        }
      }
      getCocktail();
    }
  );


  const ingredients = drink.ingredients.filter(item => item !== null).map(item => <li>{item}</li>);
  const instructions = drink.instructions.map(item => <li>{item}</li>);

  return (

    <section className="w-100 d-flex justify-content-center">
      <div className="w-75 justify-content-center">
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
            <ul>
              {instructions}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default CocktailPage;
