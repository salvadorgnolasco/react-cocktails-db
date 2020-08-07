import React from 'react';

import img from '../images/vtonic.jpg';

function CocktailCard(props) {
  const { drink } = props;

  return (
    <section className="col mb-4">
      <div className="card h-100">
        <img src={drink.img} className="card-img-top" alt="vodka tonic" />
        <div className="card-body">
          <h5 className="card-title">{drink.name}</h5>
          <h6>{drink.glass}</h6>
          <div className="card-text d-flex justify-content-end">
            <button type="button" className="btn btn-sm btn-dark ml-3">Details</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CocktailCard;
