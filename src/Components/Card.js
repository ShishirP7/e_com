import React from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
export default function Card(props) {
  const { product, addtocart } = props;
  return (
    <div id="card">
      <div id="details">
        <div id="columns">
          <div>
            <div id="imgContainer">
              <img src={product.image}></img>

              <button id="addbutton" onClick={() => addtocart(product)}>
                <FontAwesomeIcon key={Math.random()} icon={faCartPlus} />

                <div> Add to Cart</div>
              </button>
            </div>

            <div id="cardbody">
              <p id="category">{product.category}</p>
              <p id="name">{product.name}</p>
              <p id="price">Rs.{product.price}</p>
              <div id="Rate">
                <div id="rating">
                  {[...Array(product.ratings)].map((el) => {
                    return (
                      <FontAwesomeIcon key={Math.random()} icon={faStar} />
                    );
                  })}
                </div>

                <span>(View All 24 Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
