import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserStore from "./store/user/user.store";
import { AuthWrapper } from "./components/AuthWrapper/AuthWrapper";

export const appContext = createContext({ user: UserStore }); //How to type?
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <appContext.Provider value={{ user: UserStore }}>
    <AuthWrapper>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </AuthWrapper>
  </appContext.Provider>
);
