import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// require("dotenv").config()
import { Auth0Provider } from "@auth0/auth0-react";




const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
console.log(domain);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
    <App/>
  </Auth0Provider>
 
);
