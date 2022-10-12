import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        return setMonsters(users);
      });
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <div className="container">
        <h1 className="primary-heading">Monsters Rolodex</h1>
        <h2 className="secondary-heading margin-bottom-md">
          (Using Functional Component)
        </h2>
        <div className="section-search">
          <label htmlFor="search">Enter the name of monster:</label>
          <SearchBox
            className="monsters-search-box"
            onChangeHandler={onSearchChange}
            placeholder="John Doe"
          />
        </div>
        <CardList monsters={filteredMonsters} />
      </div>
    </div>
  );
};

export default App;
