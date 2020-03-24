import React from "react";
import Quote from "./components/quotes"
import "./App.css";

function App() {
    const theQuote = "Chuck Norris can divide by zero.";

    return (
        <div className="App">
            <header className="App-header">CHUCK SAYS!!</header>
            <Quote quote={theQuote} />
        </div>
    );
}

export default App;
