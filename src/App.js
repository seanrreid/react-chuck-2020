import React, { Component } from "react";
import Quote from "./components/quotes";
import "./App.css";

class App extends Component {
  state = {
    quote: "Fetching quote...",
    error: false,
    errorMessage: "",
    foo: "bar?",
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://api.chucknorris.io/jokes/random?category=dev"
      );
      const data = await response.json();
      this.setState({
        quote: data.value,
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      });
    }
  }
  render() {
    const { quote } = this.state;
    return (
      <div className="App">
        <header className="App-header">CHUCK SAYS!!</header>
        <Quote quotePropSillyName={quote} />
      </div>
    );
  }
}

export default App;
