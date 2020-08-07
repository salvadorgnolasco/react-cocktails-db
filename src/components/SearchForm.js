import React from 'react';

function SearchForm(props) {
  const { handleSearchChanges } = props;

  const handleOnSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="card-body bg-dark">
      <h3 className="card-title title bg-dark ">Cocktails DB</h3>
      <div className="card-text bg-dark mt-5">
        <form onSubmit={handleOnSubmit}>
          <div className="form-group text-center">
            <label htmlFor="search" >
              <h5 className="text-white">Search your favorite cocktail</h5>
            </label>
            <input 
              type="text"
              name="search"
              className="form-control"
              placeholder="Cocktail name" 
              onChange={handleSearchChanges}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchForm;
