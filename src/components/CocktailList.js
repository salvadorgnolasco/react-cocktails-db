import CocktailCard from './CocktailCard';

import React from 'react';

function CocktailList(props) {
  const { cocktails } = props;

  if (cocktails.length === 0) {
    return <div></div>
  }

  const drinks = cocktails.map(item => {
    return (<CocktailCard key={item.id} drink={item} />)
  });


  return (
    <div className="row row-cols-1 row-cols-md-3 mt-3">
      {drinks}
    </div>
  )
}

export default CocktailList;
