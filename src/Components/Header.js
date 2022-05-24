import React from "react";
import logo from "../Images/logo2.png";
import Cart from "../Images/cart.png";
import "./product.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Header(props) {
  const { overallPrice } = props;

  return (
    <header>
      <div id="header">
       
        <Link id="link" to="/">      
        <img id="logo" src={logo} alt="logo" />
        </Link>
        <div>
          <div id="headerCart">
            <Link id="link" to="/cart">
            <img id="cartlogo" src={Cart} alt="logo" />
            </Link>
            <div>
              
             
              
            <Link id="link" to="/cart">
              <div id="headerCart-font">Shopping Cart</div>
              <span id="headerCart-font1">Rs. {overallPrice}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
