import { useState } from "react";

const items = [
  {
    name: "apple",
    price: 0.39,
  },
  {
    name: "banana",
    price: 0.79,
  },
  {
    name: "cherry tomatoes",
    price: 3.99,
  },
];

function ShoppingCartExpected() {
  const [cart, setCart] = useState([]);

  //Good solution
  const addToCart = (item) => {
    const cartCopy = [...cart];
    //We return an element from cartCopy and reference it to itemInCart. So updating itemInCart, which lives in cartCopy, makes sure that the item quantity is updated in the real cart, when we call setCart(cartCopy).
    const itemInCart = cartCopy.find((e) => e.name === item.name);
    if (itemInCart) {
      itemInCart.quantity += 1;
      setCart(cartCopy);
    } else {
      //Adding the quantity attribute to an item object that did not have one to begin with
      //Remember prevCart or humlebuks in this syntax is always the previos state of the cart
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const increase = (item) => {
    const cartCopy = [...cart];
    const itemInCart = cartCopy.find((e) => e.name === item.name);
    itemInCart.quantity += 1;
    setCart(cartCopy);
  };

  const decrease = (item) => {
    let cartCopy = [...cart];
    const itemInCart = cartCopy.find((e) => e.name === item.name);
    if (item.quantity > 1) {
      itemInCart.quantity -= 1;
    } else {
      cartCopy = cartCopy.filter((e) => e.name !== item.name);
      //If you kept cardCopy as a const, you would have to create a new copy in order not to reassign the variable. Let allows you to reassign
      //const newCopy = cartCopy.filter((e) => e.name !== item.name);
      //setCart(newCopy);
      //return;
    }
    setCart(cartCopy);
  };

  //Functional solution (with an increment twice bug)
  /*
  const addToCartFunctional = (item) => {
    setCart((prevCart) => {
      const cartCopy = [...prevCart];
      const itemInCart = cartCopy.find((e) => e.name === item.name);
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        cartCopy.push({ ...item, quantity: 1 });
      }
      return cartCopy;
    });
  };
  */

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart">
        <div className="items">
          <h2>Items</h2>
          {items.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart</h2>

          {cart.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => decrease(item)}>-</button>
                {item.quantity}
                <button onClick={() => increase(item)}>+</button>
              </p>
              <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="total">
        {/*The arrow means returns. So the accumulator is going to return*/}
        <h2>
          Total: $
          {cart.reduce((acc, e) => acc + (e.quantity + e.price), 0).toFixed(2)}
        </h2>
      </div>
    </div>
  );
}

export default ShoppingCartExpected;
