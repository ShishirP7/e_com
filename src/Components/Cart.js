
import { Link } from "react-router-dom";
import Header from "./Header";
export default function Cart(props) {
  const {
    cartItems,
    increment,
    decrement,
    deletecard,
    overallPrice,
    TotalPrice,
    taxPrice,
  } = props;

  return (
    <>
      <Header overallPrice={overallPrice}></Header>
      {cartItems.length == 0 && (
        <div id="cartBackground">
          <div>:( Sorry !! No Items Added In this cart</div>
          <Link id="BackLink" to="/">
            <button id="btnBack">&laquo; Go to Shop</button>
          </Link>
        </div>
      )}

      <div id="cartBody">
        <div id="cardDetailscart">
          {cartItems.length !== 0 && (
            <div id="headerList">
              <p> </p>
              <p>Product</p>
              <p> </p>
              <p> </p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Sub Total</p>
              <p> </p>
            </div>
          )}
          <div>
            {cartItems.map((item) => (
              <>
                <div key={item.id}>
                  <div id="cartitem">
                    <img id="cartitemImg" src={item.image} alt="" />
                    <p id="itemname">{item.name}</p>
                    <p id="itemprice">Rs.{item.price}</p>

                    <div id="buttondiv">
                      <button id="btnQtnno" onClick={() => decrement(item)}>
                        -
                      </button>{" "}
                      <button id="buttonQtn">{item.qty}</button>{" "}
                      <button id="btnQtnno" onClick={() => increment(item)}>
                        +
                      </button>
                    </div>

                    <div>
                      <div id="itemprice">
                        {item.qty}x {item.price}
                      </div>
                      <div id="itemprice">Rs.{item.qty * item.price}</div>
                    </div>
                    <button id="btnRemove" onClick={() => deletecard(item)}>
                      Clear
                    </button>
                  </div>
                </div>
                <hr></hr>
              </>
            ))}
          </div>
          {cartItems.length !== 0 && (
            <>
              <Link id="BackLink" to="/">
                <button id="btnBack">&laquo; Go to Shop</button>
              </Link>
            </>
          )}
        </div>

        {cartItems.length !== 0 && (
          <>
            <div id="total">
              <div id="itemCheckDetail">
                <div id="h1totals">CART TOTALS</div>
                <hr />

                <div id="itemsubTotal">
                  <div>Subtotal</div>

                  <div>Rs.{TotalPrice}</div>
                </div>
                <hr />

                <div id="itemsubTotal">
                  <div>13% Tax</div>
                  <div>Rs.{taxPrice}</div>
                </div>
                <hr />
              </div>

              <div>
                <div id="itemsubTotal">
                  <div>Total Price </div>
                  <div>Rs.{overallPrice}</div>
                </div>
                <hr />

                <button id="checkoutBtn" onClick={() => alert("La Badhai xa")}>
                  Proceed to Check out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
