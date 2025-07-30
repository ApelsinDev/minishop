import React, { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Футболка", price: 1200 },
  { id: 2, name: "Кроссовки", price: 4600 },
  { id: 3, name: "Рюкзак", price: 2500 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item, idx) => idx !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="shop">
      <h1>MiniShop</h1>
      <div className="products">
        {products.map((p) => (
          <div key={p.id} className="product">
            <h3>{p.name}</h3>
            <p>{p.price} ₽</p>
            <button onClick={() => addToCart(p)}>Добавить</button>
          </div>
        ))}
      </div>
      <h2>Корзина</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} — {item.price} ₽
            <button onClick={() => removeFromCart(index)}>Удалить</button>
          </li>
        ))}
      </ul>
      <h3>Итого: {total} ₽</h3>
    </div>
  );
}

export default App;
