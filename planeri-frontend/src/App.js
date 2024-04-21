import "./App.css";
import Header from "./parts/Header";
import { Route, Routes } from "react-router";
import Home from "./parts/Home";
import Personalize from "./parts/Personalize";
import ManageData from "./parts/ManageData";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col w-full h-full items-center">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personalize" element={<Personalize />} />
          <Route path="/manage" element={<ManageData />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
