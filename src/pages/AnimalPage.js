import React from "react";
import { Link } from "react-router-dom";

const AnimalPage = () => {
  return (
    <Link
      to="/animal"
      style={{
        backgroundImage: `url(https://www.realtree.com/sites/default/files/content/images/open-graph/shutterstockdenniswdonohue.jpg)`,
        backgroundSize: "cover",
        textDecoration: "none",
        color: "white",
        border: "2px solid white",
      }}
    >
      <h2 style={{ width: "100%", textAlign: "center" }}>Animals</h2>
    </Link>
  );
};

export default AnimalPage;
