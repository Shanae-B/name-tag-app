import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput";

class App extends Component {
  state = {
    names: ["Erin", "Ann", "Nichole", "Sharon", "Maryn"]
  };

  componentDidMount() {
    // TODO: read from local storage, and if we find a message there, log it to the console
    const savedNamesString = localStorage.getItem("savedNamesString");
    if (savedNamesString) {
      const savedNames = JSON.parse(savedNamesString);
      this.setState({ names: savedNames });
    }
  }
  componentDidUpdate() {
    // TODO: save the message from our component's state to the browser's local storage
    const savedNamesString = JSON.stringify(this.state.names);
    localStorage.setItem("savedNamesString", savedNamesString);
  }
  removeName = (clickedIndex) => {
    // to learn how the .filter method works, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };

  addName = (name) => {
    const newNames = [name, ...this.state.names];
    this.setState({ names: newNames });
  };

  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput addName={this.addName} />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
