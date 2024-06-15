import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header({ setShowLoginPopup, user, setUser }) {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);
  const [showPopupUser, setShowPopupUser] = useState(false);

  return (
    <div className="flex flex-col w-full h-[70px] lg:h-[140px] gap-y-5">
      <div className="flex flex-row w-full full justify-center items-center pt-5">
        <div
          onClick={() => navigate("/")}
          className="flex flex-col w-[45%] h-full text-center justify-center items-center cursor-pointer"
        >
          <p className="text-2xl">Personalni Planeri</p>
          <p>for you, by you.</p>
        </div>
        <div className="flex flex-row w-full  h-full justify-around items-center">
          <div className="flex flex-row w-[40%] h-10 rounded-full border border-gray-900">
            <div className="flex w-[10%] h-full justify-center items-center">
              <FaSearch />
            </div>
            <input type="text" className="w-[85%] outline-none" />
          </div>
          <div className="flex flex-row w-[20%] h-full justify-end items-center gap-x-6">
            <div className="flex flex-col">
              <FaUser
                onClick={() => !user && setShowLoginPopup(true)}
                onMouseEnter={() => setShowPopupUser(true)}
                onMouseLeave={() => setShowPopupUser(false)}
                className="relative size-6 cursor-pointer"
              />
              {showPopupUser && user && (
                <div
                  onMouseEnter={() => setShowPopupUser(true)}
                  onMouseLeave={() => setShowPopupUser(false)}
                  className="absolute flex flex-col h-fit w-fit bg-slate-500 translate-y-7 p-2 rounded-lg -translate-x-[40px] lg:-translate-x-[80px]"
                >
                  <p>Name</p>
                  <p>Edit Account</p>
                  <p>My orders</p>
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      localStorage.removeItem("userInfo");
                      setUser(null);
                      alert("Uspesno ste se izlogovali!");
                    }}
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
            <div
              className="flex flex-col"
              onClick={() => setShowCart(!showCart)}
            >
              <FaShoppingCart className="relative size-6 cursor-pointer" />
              {showCart && (
                <div className="flex flex-col w-[300px] h-[450px] gap-y-3 justify-start items-center p-5 bg-red-300 -translate-x-[270px] translate-y-7 absolute">
                  <h2>Cart</h2>
                  <div className="h-[1px] bg-gray-800 w-full"></div>
                  <div className="flex flex-row w-full h-fit gap-x-5 items-center border border-gray-800 p-1">
                    <div className="flex w-10 h-10 border border-gray-800"></div>
                    <div className="flex flex-col">
                      <p>Studentski</p>
                      <p>Price: 500 djunti</p>
                    </div>
                  </div>
                  <div className="flex flex-row w-full h-fit gap-x-5 items-center border border-gray-800 p-1">
                    <div className="flex w-10 h-10 border border-gray-800"></div>
                    <div className="flex flex-col">
                      <p>Studentski</p>
                      <p>Price: 500 djunti</p>
                    </div>
                  </div>
                  <div className="flex flex-row w-full h-fit gap-x-5 items-center border border-gray-800 p-1">
                    <div className="flex w-10 h-10 border border-gray-800"></div>
                    <div className="flex flex-col">
                      <p>Studentski</p>
                      <p>Price: 500 djunti</p>
                    </div>
                  </div>
                  <div className="flex w-full h-fit p-3 justify-center items-center cursor-pointer bg-blue-300">
                    Buy
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full h-8 bg-green-900 justify-center items-center gap-x-40 text-white">
        <p className="cursor-pointer" onClick={() => navigate("/planers")}>
          Planeri
        </p>
        <p className="cursor-pointer" onClick={() => navigate("/personalize")}>
          Personalizuj
        </p>
        <p
          className="cursor-pointer"
          onClick={() => navigate("/aboutPlanners")}
        >
          O planerima
        </p>
        <p className="cursor-pointer" onClick={() => navigate("/manage")}>
          Upravljanje podacima
        </p>
        <p className="cursor-pointer" onClick={() => navigate("/contact")}>
          Kontakt
        </p>
      </div>
    </div>
  );
}
