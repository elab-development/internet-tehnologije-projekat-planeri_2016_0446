import logo from "./logo.svg";
import "./App.css";
import Header from "./parts/Header";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col w-full h-full gap-y-3 items-center">
        <Header />
      </div>
    </div>
  );
}

export default App;
