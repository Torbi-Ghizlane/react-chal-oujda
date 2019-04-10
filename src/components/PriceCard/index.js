import React from "react";
import { Link } from "react-router-dom";
import "./pricing.css";

const PriceCard = ({ prices = [] }) => (
  <div className="container">
    <div className="card-deck mb-3 text-center">
      {prices.map((price, index) => (
        <div className="card mb-4 shadow-sm" key={index}>
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">{price.CardTitle}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              {price.priceNumber} <small className="text-muted">/ mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>{price.usersNumber} users included</li>
              <li>{price.storageNumber} GB of storage</li>
              <li>{price.type} support</li>
              <li>Help center access</li>
            </ul>
            <Link to={price.link}>
              <button
                type="button"
                className={`btn btn-lg  ${price.className}`}
              >
                {price.button}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PriceCard;
