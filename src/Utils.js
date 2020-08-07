

const mapResponseSummary = (data) => {

  const cocktails = data.map(item => {
    const {
      idDrink,
      strDrink,
      strGlass,
      strCategory,
      strDrinkThumb,
    } = item;

    return { id: idDrink, name: strDrink, glass: strGlass, category: strCategory, img: strDrinkThumb };
  });

  return cocktails;
}

const mapResponseDetailed = (data) => {

  const cocktails = data.map(item => {
    const {
      idDrink,
      strDrink,
      strGlass,
      strCategory,
      strDrinkThumb,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strInstructions,
      strInstructionsDE,
    } = item;

    return {
      id: idDrink,
      name: strDrink,
      glass: strGlass,
      category: strCategory,
      img: strDrinkThumb,
      ingredients: [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5],
      instructions: [strInstructions, strInstructionsDE],
    };
  });

  return cocktails;
}

export { mapResponseSummary, mapResponseDetailed };