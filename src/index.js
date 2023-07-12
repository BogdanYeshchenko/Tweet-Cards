import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./redux/store";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
