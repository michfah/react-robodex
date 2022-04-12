import { Component } from 'react';
import CardList from './components/card-list/card-list';

import './App.css';
import SearchBox from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            return { robots: users };
          },
          () => {
            console.log(this.state);
          })
      )
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return { searchField };
      })
  };

  render() {

    const { robots, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Robodex</h1>
        <SearchBox
          className='search-box'
          onChangeHandler={onSearchChange}
          placeholder="Search robots..."
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
