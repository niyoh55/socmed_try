import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./screens/Home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
