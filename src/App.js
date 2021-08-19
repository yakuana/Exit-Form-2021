import React from "react";
import { Route } from "react-router-dom";

// styles
import "./styles.css";

// components
import Form from "./components/Form.js";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="all-content">
        <Route path="/:id" component={Form} />
      </div>
    </div>
  );
}
