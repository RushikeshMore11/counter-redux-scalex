import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import myStore from "./redux/Store";
import './styles/App.css';


ReactDOM.render(<Provider store={myStore}>
    <App />
</Provider>, document.getElementById("root"));