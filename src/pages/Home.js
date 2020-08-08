import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

import { mapResponseSummary } from '../Utils';

import React from 'react';

function Home() {

  const [searchTerm, setSearchTerm] = React.useState("vodka");
  const [cocktails, setCocktails] = React.useState([]);

  React.useEffect(
    () => {
      async function getDrinks() {
        try {
          const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
          const data = await response.json();
          const { drinks } = data;
          setCocktails(mapResponseSummary(drinks));
        } catch (error) {
          console.log(error);
        }
      }
      getDrinks();

    },
    [searchTerm]
  );

  const handleSearchChanges = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="w-100 d-flex justify-content-center">
      <div className="w-75 m-5 p-3 card border-light">
        <SearchForm handleSearchChanges={handleSearchChanges}/>
        <CocktailList cocktails={cocktails} />
      </div>
    </section>
  )
}

export default Home;
