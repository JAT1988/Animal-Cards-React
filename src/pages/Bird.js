import React from "react";
import Card from "./pages/Card";
import Search from "./components/Search";

const Bird = (props) => {
  const searchFilter = props.data.filter((bird) => {
    return bird.name.includes(props.searchInput);
  });
  return (
    <div>
      <h2>Birds {props.data.length}</h2>
      <Search searchHandler={props.searchHandler} />
      <div className="bird-species-container">
        {searchFilter.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            likes={item.likes}
            removeCard={() => props.removeHandler(item.name)}
            addLikes={() => props.likesHandler(item.name, "add")}
            removeLikes={() => props.likesHandler(item.name, "remove")}
          />
        ))}
      </div>
    </div>
  );
};

export default Bird;
