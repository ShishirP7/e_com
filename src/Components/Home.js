import React from "react";
import Card from "./Card";
import {
 
  
  Link
} from "react-router-dom";
import Header from "./Header";
import Copyright from "./copyright";
export default function Home(props) {
  const { products, addtocart, cartItems,overallPrice } = props;

  return (

    <div>
      <Header overallPrice={overallPrice}></Header>
      <div id="body">
        <p id="headline1">
          Summer Accessories <br />
          Super Sale
        </p>
        <p id="line1">
          Great deals on brands like Samsung,Apple ,Beats and Many More
        </p>
        <button id="btnshop">Shop Now</button>
      </div>
      <div id="headline2">
      <p > Our Products</p>
      </div>
     

      <div id="productsection">
        {products.map((product) => (
          <Card key={product.id} product={product} addtocart={addtocart}></Card>
        ))}
      </div>
      <Link  to="/cart">
            <button id="NextLink">Go To Cart &raquo;</button>
          </Link>
      <Copyright></Copyright>
    </div>
  );
}
