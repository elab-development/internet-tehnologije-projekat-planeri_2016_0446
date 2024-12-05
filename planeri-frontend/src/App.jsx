import "./App.css";
import Header from "./parts/Header";
import { Route, Routes } from "react-router";
import Home from "./parts/Home";
import Personalize from "./parts/Personalize";
import ManageData from "./parts/ManageData";
import { useEffect, useState } from "react";
import axios from "axios";
import Planers from "./parts/Planers";
import Contact from "./parts/Contact";
import AboutPlaners from "./parts/AboutPlaners";
import MyOrders from "./parts/MyOrders";

function App() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));
        localStorage.setItem("userToken", response.data.access_token);
        setUser(response.data.user);
        setShowLoginPopup(false);
        setEmail(null);
        setName(null);
        setPassword(null);
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async () => {
    try {
      setShowLoginPopup(false);
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name: name,
        email: email,
        password: password,
      });
      if (response.status === 200) {
        setShowRegisterPopup(false);
        alert(response.data.message);
        handleLogin();
      }
    } catch (error) {
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
          cartItems={cartItems}
          setCartItems={setCartItems}
          setProductsByExp={setProducts}
        />
        <Routes>
          <Route
            path="/"
            element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/planers"
            element={
              <Planers
                products={products}
                setProducts={setProducts}
                setCartItems={setCartItems}
              />
            }
          />
          <Route path="/personalize" element={<Personalize />} />
          <Route path="/aboutPlanners" element={<AboutPlaners />} />
          <Route path="/manage" element={<ManageData />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myOrders" element={<MyOrders user={user} />} />
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
                <p>Dobrodosli</p>
                <p>Prijavite se</p>
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
                    <p>Lozinka</p>
                    <input
                      className="border border-blue-400"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                    />
                  </div>
                  <div
                    onClick={() => handleLogin()}
                    className="flex flex-col w-full h-fit px-6 py-1 rounded-lg justify-center items-center bg-orange-400 text-white cursor-pointer"
                  >
                    <p>Prijavi se</p>
                  </div>
                </div>
                <p
                  onClick={() => setShowRegisterPopup(true)}
                  className="cursor-pointer hover:underline"
                >
                  Registruj se
                </p>
              </div>
            </div>
          </>
        )}
        {showRegisterPopup && (
          <>
            <div className="absolute flex flex-col w-full h-full justify-center items-center bg-slate-700 opacity-50"></div>
            <div className="absolute flex flex-col h-full w-full justify-center items-center">
              <div className="relative flex flex-col w-[400px] h-[400px] justify-center items-center bg-white rounded-lg p-6 gap-y-4">
                <p
                  onClick={() => setShowRegisterPopup(false)}
                  className="absolute right-4 top-4 text-black cursor-pointer"
                >
                  X
                </p>
                <p>Dobrodosli</p>
                <p>Registrujte se</p>
                <div className="flex flex-col gap-y-5 border border-blue-300 p-6 rounded-2xl">
                  <div className="flex flex-col w-full justify-center items-center">
                    <p>Ime</p>
                    <input
                      className="border border-blue-400"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                    />
                  </div>
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
                    <p>Lozinka</p>
                    <input
                      className="border border-blue-400"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                    />
                  </div>
                  <div
                    onClick={() => handleRegister()}
                    className="flex flex-col w-full h-fit px-6 py-1 rounded-lg justify-center items-center bg-orange-400 text-white cursor-pointer"
                  >
                    <p>Registruj se</p>
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
