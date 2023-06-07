import { useEffect, useState } from "react";

const items = [
  { id: 1, name: "apple", price: 0.39 },
  { id: 2, name: "banana", price: 0.79 },
  { id: 3, name: "cherry tomatoes", price: 3.99 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [applesCount, setApplesCount] = useState(0);
  const [bananaCount, setBananaCount] = useState(0);
  const [cherryTomatoCount, setcherryTomatoCount] = useState(0);
  const [total, setTotal] = useState(0.0);

  //prettier-ignore
  useEffect(() => {
    const newTotal = cart.reduce((accumulator, item) => accumulator + item.price, 0);
    setTotal(newTotal);
  }, [cart]);

  function addToCart(item) {
    setCart((prevItems) => [...prevItems, item]);
    countNewItem(item);
    //calculateTotal(item);
  }

  function removeFromCart(item) {
    setCart((prevItems) => {
      const indexToRemove = prevItems.findIndex((item) => item.id === item.id);
      if (indexToRemove !== -1) {
        const updatedCart = [...prevItems];
        updatedCart.splice(indexToRemove, 1);
        return updatedCart;
      }
      return prevItems;
    });

    removeNewItem(item);
    // Other logic...
  }

  function countNewItem(item) {
    switch (item.id) {
      case 1:
        setApplesCount(applesCount + 1);
        break;
      case 2:
        setBananaCount(bananaCount + 1);
        break;
      case 3:
        setcherryTomatoCount(cherryTomatoCount + 1);
        break;
    }
  }

  function removeNewItem(item) {
    switch (item.id) {
      case 1:
        setApplesCount(applesCount - 1);
        break;
      case 2:
        setBananaCount(bananaCount - 1);
        break;
      case 3:
        setcherryTomatoCount(cherryTomatoCount - 1);
        break;
    }
  }
  //prettier-ignore
  const apples = applesCount > 0 ? (
      <>
        <div>Apples</div>
        <div>{applesCount}</div>
        {/*<button onClick={() => addToCart(items[0])}>+</button>*/}
        <button onClick={() => addToCart(items.find((item) => item.id === 1))}>+</button>
        <button onClick={() => removeFromCart(items.find((item) => item.id === 1))}>-</button>
      </>
    ) : null;

  const bananas =
    bananaCount > 0 ? (
      <>
        <div>Bananas</div>
        <div>{bananaCount}</div>
        <button onClick={() => addToCart(items.find((item) => item.id === 2))}>
          +
        </button>
        <button
          onClick={() => removeFromCart(items.find((item) => item.id === 2))}
        >
          -
        </button>
      </>
    ) : null;

  const cherryTomatoes =
    cherryTomatoCount > 0 ? (
      <>
        <div>Cherry Tomatoes</div>
        <div>{cherryTomatoCount}</div>
        <button onClick={() => addToCart(items.find((item) => item.id === 3))}>
          +
        </button>
        <button
          onClick={() => removeFromCart(items.find((item) => item.id === 3))}
        >
          -
        </button>
      </>
    ) : null;

  {
    /*
  function calculateTotal() {
    const tot = 0;
    cart.forEach((item) => {
      setTotal(tot + item.price);
      //tot += item.price;
    });
    setTotal(tot);
    //setTotal
  }
*/
  }

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
          {apples}
          {bananas}
          {cherryTomatoes}
          {/*
          {cart.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button>-</button>
                {item.quantity}
                <button>+</button>
              </p>
              <p>Subtotal: ${item.quantity * item.price}</p>
            </div>
          ))}
          */}
        </div>
      </div>
      <div className="total">
        <h2>Total: ${total}</h2>
      </div>
    </div>
  );
  /*
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart">
        <div className="items">
          <h2>Items</h2>
          {items.map((item) => (
            <div key={item.name}>
              <div>{item.name}</div>
              <div>${item.price}</div>
              <button
                //onClick={() => setCart((prevItems) => [...prevItems, item])}
                onClick={() => addToCart(item)}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <h2>Cart</h2>
      {apples}
      {bananas}
      {cherryTomatoes}
      <div className="total">
        <h2>Total: $0.00</h2>
      </div>
    </div>
  );
  */
}

/*
  function countItemsInCart(cart) {
    const uniqueItems = [];

    cart.forEach((item) => {
      if (!uniqueItems.includes(item)) {
        uniqueItems.push(item);
      }
    });

    return uniqueItems.map((item) => {
      <div>{item.name}</div>;
    });
  }
  */
/*
  const itemsInCart = [
    { name: "apple", price: 0.39, quantity: 0 },
    { name: "banana", price: 0.79, quantity: 0 },
    { name: "cherry tomatoes", price: 3.99, quantity: 0 },
  ];

  function updateCart(item) {
    for (item in itemsInCart) {

    }
    setCart((item) => [...prevItems, item]);
  }
*/

/*
  function displayCart(cart) {
    <div>{cart.map(item)}</div>;
  }
  */

/*

function ShoppingCart() {
  const cart = [{ name: "apple", quantity: 3, price: 0.39 }];

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
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart</h2>

          {cart.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button>-</button>
                {item.quantity}
                <button>+</button>
              </p>
              <p>Subtotal: ${item.quantity * item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="total">
        <h2>Total: $0.00</h2>
      </div>
    </div>
  );
}

export default ShoppingCart;
*/

/*
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

function ShoppingCart() {
  const cart = [{ name: "apple", quantity: 3, price: 0.39 }];

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
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart</h2>

          {cart.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button>-</button>
                {item.quantity}
                <button>+</button>
              </p>
              <p>Subtotal: ${item.quantity * item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="total">
        <h2>Total: $0.00</h2>
      </div>
    </div>
  );
}

export default ShoppingCart;
*/
