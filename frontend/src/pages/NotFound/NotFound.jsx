import React from "react";
import { useNavigate } from "react-router";
import notfound from "../../assets/not-found.png";
import "./notfound.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound">
      <img src={notfound} alt="not-found" />
      <h1>Não encontrado</h1>
      <button onClick={() => navigate("/")}>Ir para Homepage</button>
    </div>
  );
};

export default NotFound;
