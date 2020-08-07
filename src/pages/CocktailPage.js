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

  return (

    <section className="w-100 d-flex justify-content-center">
      <div className="w-75 justify-content-center">
        <article className="single-cocktail">
          <img src={drink.img} alt={drink.name}></img>
          <div className="summary">
            <h3>{drink.name}</h3>
            <p>{drink.ingredients}</p>
          </div>
          <div className="preparation">
            {drink.instructions}
          </div>
        </article>
      </div>
    </section>
  )
}

export default CocktailPage;
