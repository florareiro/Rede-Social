import axios from "axios";
import React, { useEffect, useState } from "react";
import "./loading.css";

const Loading = ({ show }) => {
  const [quote, setQuote] = useState("");
  const fetchQuote = async () => {
    const { data } = await axios.get(
      "https://uselessfacts.jsph.pl/random.json?language=pt-br"
    );
    setQuote(data.text);
  };
  useEffect(() => {
    if (!show) {
      fetchQuote();
      setTimeout(() => {
        setQuote((q) => {
          if (q) return q;
          return "Demorando para carregar:(";
        });
      }, 3000);
    }
  }, [show]);

  return (
    <section className="loading">
      <div className="loading__circle"></div>
      {quote && (
        <>
          <h2>Você sabia?</h2>
          <p>{quote}</p>
        </>
      )}
    </section>
  );
};

export default Loading;
