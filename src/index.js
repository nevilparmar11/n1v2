import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AllContests from "./components/AllContests";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AllContests />
  </React.StrictMode>,
  document.getElementById("root")
);
