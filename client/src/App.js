import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/components/navbar";
import MainPage from "./pages/mainPage";
import MyBooks from "./pages/myBooks";
import LikedBooks from "./pages/likedBooks";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/mybooks" component={MyBooks} />
      <Route exact path="/likedbooks" component={LikedBooks} />
    </Router>
  );
}

export default App;
