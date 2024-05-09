import { useState, useEffect } from "react";
import "./App.css";
import Particle from "./Particle.js"; // Import the Particle component

function App() {
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  return (
    <div className="background">
      <div className="Container">
        {Array.from({ length: 20 }).map((_, index) => (
          <Particle key={index} />
        ))}
        <h2 className="text">{quotes.text}</h2>
        <h3 className="author">Author: {quotes.author}</h3>
        <button onClick={getQuote}>getQuote</button>
      </div>
    </div>
  );
}

export default App;
