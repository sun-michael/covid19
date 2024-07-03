import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      usStates: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://disease.sh/v3/covid-19/jhucsse/counties")
      // fetch("https://corona.lmao.ninja/v2/states?sort&yesterday")
      // fetch('https://api.covidtracking.com/v1/states/info.json')
      // fetch('https://api.covidtracking.com/v1/states/daily.json')
      // fetch('https://jsonplaceholder.typicode.com/users')
      // .then(r => console.log(r))
      // .then(r => r.json())
      // .then(r => console.log(r))
      .then((response) => response.json())
      .then((data) => this.setState({ usStates: data }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { usStates, searchField } = this.state;
    const filteredUsStates = usStates.filter((usState) =>
      usState.province.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>COVID-19 Tracker</h1>
        <SearchBox
          placeholder="search a state"
          handleChange={this.handleChange}
        />
        <CardList usStates={filteredUsStates} />
      </div>
    );
  }
}

export default App;
