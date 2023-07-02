import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

const Header = function () {
  // const Style = { color: "red", fontSize: "42px", textTransform: "upperCase" };

  const Style = {};

  return (
    <header className="header">
      <h1 style={Style}>Fast React Pizza co.</h1>;
    </header>
  );
};

const Menu = function () {
  const pizzas = pizzaData;
  const numOfPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* <Pizza
        name="Tomato"
        ingridients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/spinaci.jpg"
        price="10"
      /> */}
      {numOfPizza > 0 ? (
        <ul className="pizzas">
          {pizzas.map((el) => (
            <Pizza
              key={+new Date() + el.name}
              name={el.name}
              photoName={el.photoName}
              ingridients={el.ingredients}
              price={el.price}
              soldout={el.soldOut}
            />
          ))}
        </ul>
      ) : (
        <p>We'r e still working on our menu. Please come back later</p>
      )}
    </main>
  );
};

function Pizza(props) {
  console.log(props);
  if (props.soldout) return null;
  return (
    <li className="pizza">
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingridients}</p>
      <p>{props.price}$</p>
    </li>
  );
}

const Footer = function () {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour > openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We are currently Open");
  // else alert("Sorry We are closed");

  return (
    <footer>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We'r happy to welcome you between {openHour}:00 and {closeHour}:00{" "}
        </p>
      )}
    </footer>
  );
};

function Order(props) {
  return (
    <div className="order">
      <p>
        We'r open until {props.closeHour}:00 Come and visit us or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
//React v18

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//React Before
React.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
