import React from "react";
import { Link } from "react-router-dom";

const BirdPage = () => {
  return (
    <Link
      to="/bird"
      style={{
        backgroundImage: `url(https://i.natgeofe.com/n/82cd1208-970b-48e4-97e9-2a62247d2210/harpy-eagles-brazil-14a.jpg)`,
        backgroundSize: "cover",
        textDecoration: "none",
        color: "white",
        border: "2px solid white",
        
      }}
    >
      <h2 style={{ width: "100%", textAlign: "center" }}>Birds</h2>
    </Link>
  );
};

export default BirdPage;
