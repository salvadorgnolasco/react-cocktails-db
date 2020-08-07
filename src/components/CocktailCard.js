import { Link } from 'react-router-dom';
import React from 'react';

function CocktailCard(props) {
  const { drink } = props;

  return (
    <section className="col mb-4">
      <div className="card h-100">
        <img src={drink.img} className="card-img-top" alt="My drink" />
        <div className="card-body">
          <h5 className="card-title">{drink.name}</h5>
          <h6>{drink.glass}</h6>
          <div className="card-text d-flex justify-content-end">
            <Link
              className="btn btn-sm btn-dark ml-3"
              to={`/cocktail/${drink.id}`}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CocktailCard;
