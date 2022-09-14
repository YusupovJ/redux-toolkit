import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./toolkitStore";
import "./css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);

reportWebVitals();
