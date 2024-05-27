import "./App.css";
import Header from "./parts/Header";
import { Route, Routes } from "react-router";
import Home from "./parts/Home";
import Personalize from "./parts/Personalize";
import ManageData from "./parts/ManageData";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleLogin = async () => {
    try {
      // Make a GET request using Axios
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      localStorage.setItem("userToken", response.data.access_token);
      setUser(response.data.user);
      setShowLoginPopup(false);
      // Set the fetched data to the state
      alert(response.data.message);
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  };

  useEffect(() => {
    const savedUserInfo = localStorage.getItem("userInfo");
    if (savedUserInfo) {
      setUser(JSON.parse(savedUserInfo));
    }
  }, []);

  return (
    <div className="App">
      <div className="flex flex-col w-full h-full items-center">
        <Header
          setShowLoginPopup={setShowLoginPopup}
          user={user}
          setUser={setUser}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personalize" element={<Personalize />} />
          <Route path="/manage" element={<ManageData />} />
        </Routes>
        {showLoginPopup && (
          <>
            <div className="absolute flex flex-col w-full h-full justify-center items-center bg-slate-700 opacity-50"></div>
            <div className="absolute flex flex-col h-full w-full justify-center items-center">
              <div className="relative flex flex-col w-[400px] h-[400px] justify-center items-center bg-white rounded-lg p-6 gap-y-4">
                <p
                  onClick={() => setShowLoginPopup(false)}
                  className="absolute right-4 top-4 text-black cursor-pointer"
                >
                  X
                </p>
                <p>Welcome</p>
                <p>Login to the app</p>
                <div className="flex flex-col gap-y-5 border border-blue-300 p-6 rounded-2xl">
                  <div className="flex flex-col w-full justify-center items-center">
                    <p>Email</p>
                    <input
                      className="border border-blue-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col w-full justify-center items-center">
                    <p>Password</p>
                    <input
                      className="border border-blue-400"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                    />
                  </div>
                  <div
                    onClick={() => handleLogin()}
                    className="flex flex-col w-full h-fit px-6 py-1 rounded-lg justify-center items-center bg-green-700 text-white cursor-pointer"
                  >
                    <p>Login</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
