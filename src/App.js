import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      usStates: [],
      searchField: ''
    };
  };

  componentDidMount() {
    fetch('https://corona.lmao.ninja/v2/jhucsse/counties')
      // fetch('https://api.covidtracking.com/v1/states/info.json')
      // fetch('https://api.covidtracking.com/v1/states/daily.json')
      // fetch('https://jsonplaceholder.typicode.com/users')
      // .then(r => console.log(r))
      // .then(r => r.json())
      // .then(r => console.log(r))
      .then(response => response.json())
      .then(data => this.setState({ usStates: data }))
  }

  render() {
    const { usStates, searchField } = this.state;
    const filteredUsStates = usStates.filter(usState =>
      usState.province.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input type="search"
          placeholder="search state"
          onChange={e => {
            this.setState({ searchField: e.target.value })
          }}
        />
        <CardList usStates={filteredUsStates} />
      </div >
    );
  };
}

export default App;
