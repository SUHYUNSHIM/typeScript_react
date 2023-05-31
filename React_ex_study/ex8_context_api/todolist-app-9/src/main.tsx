import React from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./AppContainer";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { TodoProvider } from "./TodoContext";
import App from "./components/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  //   <AppContainer />
  // </React.StrictMode>
  <React.StrictMode>
    <TodoProvider>
      <App/>
    </TodoProvider>
  </React.StrictMode>
);
