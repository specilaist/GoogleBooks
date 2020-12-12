import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./pages/components/navbar";
import MainPage from "./pages/mainPage";
import MyBooks from "./pages/myBooks";
import LikedBooks from "./pages/likedBooks";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Navbar />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/mybooks" component={MyBooks} />
        <Route exact path="/likedbooks" component={LikedBooks} />
      </div>
    </Router>
  );
}

export default App;
