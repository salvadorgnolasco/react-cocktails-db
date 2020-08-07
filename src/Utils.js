

const mapResponseSummary = (data) => {

  console.log('data', data);

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

export { mapResponseSummary };