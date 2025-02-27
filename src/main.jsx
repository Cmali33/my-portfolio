import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
// import App3 from "./App3";
// import App2 from "./App2";
// import App from '../src/Pizzabay/App'
import App from './portfolio/Portfolio/App'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App2></App2> */}
    {/* <App3></App3> */}
    <App></App>
  </StrictMode>
);
