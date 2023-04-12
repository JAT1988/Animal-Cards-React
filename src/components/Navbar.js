import React from "react";
import { NavLink } from "react-router-dom";
import "../styleSheets/index.css";

const Navbar = (props) => {
  const searchFilterAnimal = props.animalData.filter((animal) => {
    return animal.name.includes(props.searchInput);
  });
  const searchFilterBird = props.birdData.filter((bird) => {
    return bird.name.includes(props.searchInput);
  });

  return (
    <nav className="navbar">
      <div>
        <NavLink to="/">Animal Likes</NavLink>
      </div>
      <ul className="navbarUl">
        <li className="navbarList">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navbarList">
          <NavLink to="/animal">Animals {searchFilterAnimal.length}</NavLink>
        </li>
        <li className="navbarList">
          <NavLink to="/bird">Birds {searchFilterBird.length}</NavLink>
        </li>
        <li className="navbarList">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
