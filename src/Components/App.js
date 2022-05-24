
import Home from "../Components/Home";
import Cart from "./Cart";
import data from "./data";
import { Route } from "react-router";
import { useState } from "react";
function App() {
  const { products } = data;

  const [cartItems, setCartItems] = useState([]);

  const TotalPrice = cartItems.reduce(
    (InitialPrice, SelectedItem) =>
      InitialPrice + SelectedItem.qty * SelectedItem.price,
    0
  );
  const taxPrice = TotalPrice * 0.13;

  const overallPrice = TotalPrice + taxPrice;

  const addtocart = (product) => {
    const clickedItem = cartItems.find((el) => el.id === product.id);
    if (clickedItem) {
      alert("Item  Already Added to Cart");
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const deletecard = (product) => {
    const clickedItem = cartItems.find((el) => el.id === product.id);
    if (clickedItem) {
      setCartItems(cartItems.filter((el) => el.id !== product.id));
    }
  };

  const increment = (product) => {
    const clickedItem = cartItems.find((el) => el.id === product.id);

    if (clickedItem) {
      setCartItems(
        cartItems.map((el) =>
          el.id === product.id
            ? { ...clickedItem, qty: clickedItem.qty + 1 }
            : el
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const decrement = (product) => {
    const clickedItem = cartItems.find((el) => el.id === product.id);
    if (clickedItem.qty === 1) {
      alert("Item cant have less than 1 quantity");
    } else {
      setCartItems(
        cartItems.map((el) =>
          el.id === product.id
            ? { ...clickedItem, qty: clickedItem.qty - 1 }
            : el
        )
      );
    }
  };
  return (
    <div>
      <div>
        <switch>
          <Route exact path="/">
            <Home
              products={products}
              increment={increment}
              addtocart={addtocart}
              cartItems={cartItems}
              overallPrice={overallPrice}
            ></Home>
          </Route>

          <Route path="/cart">
            <Cart
              products={products}
              cartItems={cartItems}
              increment={increment}
              decrement={decrement}
              addtocart={addtocart}
              deletecard={deletecard}
              overallPrice={overallPrice}
              TotalPrice={TotalPrice}
              taxPrice={taxPrice}
            />
          </Route>
        </switch>
      </div>
    </div>
  );
}

export default App;
