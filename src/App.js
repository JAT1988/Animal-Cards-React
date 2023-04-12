import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { animals, birds } from "./components/animalsList";
import "./styleSheets/index.css";
import Animals from "./UI/Animals";
import AnimalPage from "./UI/AnimalPage";
import BirdPage from "./UI/BirdPage";
import Bird from "./UI/Bird";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./UI/AboutPage";

class App extends Component {
  state = {
    animals: animals,
    birds: birds,
    title: "Animal Likes",
    searchInput: "",
  };

  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({
      animals: updatedArray,
    });
  };
  removeHandlerBird = (name) => {
    const updatedArray = this.state.birds.filter((bird) => bird.name !== name);
    this.setState({
      birds: updatedArray,
    });
  };

  likesHandler = (name, action) => {
    this.setState((prevState) => {
      const updatedArray = prevState.animals.map((animal) => {
        if (animal.name === name) {
          if (action === "add") {
            return { ...animal, likes: animal.likes + 1 };
          } else {
            return { ...animal, likes: animal.likes - 1 };
          }
        } else {
          return animal;
        }
      });
      return {
        animals: updatedArray,
      };
    });
  };
  likesHandlerBird = (name, action) => {
    this.setState((prevState) => {
      const updatedArray = prevState.birds.map((bird) => {
        if (bird.name === name) {
          if (action === "add") {
            return { ...bird, likes: bird.likes + 1 };
          } else {
            return { ...bird, likes: bird.likes - 1 };
          }
        } else {
          return bird;
        }
      });
      return {
        birds: updatedArray,
      };
    });
  };

  searchHandler = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar
            animalData={this.state.animals}
            birdData={this.state.birds}
            searchInput={this.state.searchInput}
          ></Navbar>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="animal-container">
                <AnimalPage></AnimalPage>
                <BirdPage></BirdPage>
              </div>
            }
          ></Route>
          <Route
            path="/animal"
            element={
              <Animals
                data={this.state.animals}
                removeHandler={this.removeHandler}
                likesHandler={this.likesHandler}
                searchHandler={this.searchHandler}
                searchInput={this.state.searchInput}
              />
            }
          ></Route>
          <Route
            path="/bird"
            element={
              <Bird
                data={this.state.birds}
                removeHandler={this.removeHandlerBird}
                likesHandler={this.likesHandlerBird}
                searchHandler={this.searchHandler}
                searchInput={this.state.searchInput}
              />
            }
          ></Route>
          <Route
            path="/about"
            element={
              <div className="about-container">
                <AboutPage></AboutPage>
              </div>
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
