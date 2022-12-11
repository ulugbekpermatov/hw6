import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { App, ServiceProvider } from "./components";
import { store } from "./redux-act";
import BookStoreService from "./services";

const storeService = new BookStoreService();

console.log("Hello")

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ServiceProvider value={storeService}>
        <Provider store={store}>
          <App />
        </Provider>
      </ServiceProvider>
    </Router>
  </React.StrictMode>
);
