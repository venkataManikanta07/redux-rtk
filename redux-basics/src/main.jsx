import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounterUI from "./CounterUI.jsx";
import Rtk from "./Rtk.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<App/>}></Route>
        <Route path="/redux" element = {<CounterUI/>}></Route>
        <Route path="/rtk" element = {<Rtk/>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
