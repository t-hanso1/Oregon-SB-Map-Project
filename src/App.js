import React from "react";
import "./styles.css";
import Blog from "./pages/Blog.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Route path="/" component={Blog} />
    </Router>
  );
}
