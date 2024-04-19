import logo from "./logo.svg";
import "./App.css";
import Header from "./parts/Header";
import { Route, Routes } from "react-router";
import Home from "./parts/Home";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col w-full h-full gap-y-3 items-center">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
