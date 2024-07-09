import { useEffect, useRef, useState } from "react";
import { FaSearch, FaShoppingCart, FaTrash, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useProductsService } from "../service/useProductsService";
import { useOrdersService } from "../service/useOrdersService";

export default function Header({
  setShowLoginPopup,
  user,
  setUser,
  setProductsByExp,
}) {
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showPopupUser, setShowPopupUser] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchExp, setSearchExp] = useState("");
  const [price, setPrice] = useState(0);

  const { getProductsBySearchRequest } = useProductsService();
  const { generatePdfRequest } = useOrdersService();

  const getCartItems = () => {
    var cItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const totalPrice = cItems.reduce(
      (sum, item) => sum + parseInt(item.price),
      0
    );

    setCartItems(cItems);
    setPrice(totalPrice);
  };

  const handleSearch = (event) => {
    setSearchExp(event.target.value);
  };

  const submitSearch = async (searchExp) => {
    navigate("planers");

    let products = await getProductsBySearchRequest(searchExp);
    setProductsByExp(products);
  };

  useEffect(() => {
    getCartItems();
  }, [showCart]);

  const removeCartItem = (id) => {
    var cItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedItems = cItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);

    const totalPrice = updatedItems.reduce((sum, item) => sum + item.price, 0);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    setPrice(totalPrice);
  };

  const generatePdf = async () => {
    let generatePdfRequestModel = {
      items: cartItems,
      price: price,
    };
    await generatePdfRequest(generatePdfRequestModel).then(() =>
      alert("Download started!")
    );
  };

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
            <div
              className="flex w-[10%] h-full justify-center items-center cursor-pointer"
              onClick={() => submitSearch(searchExp.toString())}
            >
              <FaSearch />
            </div>
            <input
              type="text"
              value={searchExp}
              onChange={(e) => handleSearch(e)}
              className="w-[85%] outline-none"
            />
          </div>
          <div
            className="flex flex-row w-[20%] h-full justify-end items-center gap-x-6"
            onMouseLeave={() => setShowPopupUser(false)}
          >
            <div className="flex flex-col">
              <FaUser
                onClick={() => !user && setShowLoginPopup(true)}
                onMouseEnter={() => setShowPopupUser(true)}
                className="relative size-6 cursor-pointer"
              />
              {showPopupUser && user && (
                <div
                  onMouseEnter={() => setShowPopupUser(true)}
                  className="absolute flex flex-col h-fit w-40 gap-y-2 bg-[#FFECA1] border border-orange-950 translate-y-7 p-2 rounded-lg -translate-x-[40px] lg:-translate-x-[130px]"
                >
                  <p>{user.name}</p>
                  <div className="h-[1px] bg-black"> </div>
                  <p className="cursor-pointer hover:bg-orange-400 rounded-lg">
                    Moje porudzbine
                  </p>
                  <p
                    className="cursor-pointer hover:bg-orange-400 rounded-lg"
                    onClick={() => {
                      localStorage.removeItem("userInfo");
                      setUser(null);
                      alert("Uspesno ste se izlogovali!");
                    }}
                  >
                    Odjavi se
                  </p>
                </div>
              )}
            </div>
            <div
              className="flex flex-col"
              onClick={() => setShowCart(!showCart)}
            >
              <div className="relative">
                <div className="absolute right-0 top-0 rounded-full size-4 z-50 translate-x-2 -translate-y-1 flex justify-center items-center bg-white border-[1px] border-gray-700 text-red-600 font-bold text-xs">
                  {cartItems.length}
                </div>
                <FaShoppingCart className="relative size-6 cursor-pointer" />
              </div>
              {showCart && (
                <div className="flex flex-col w-[300px] h-[450px] gap-y-3 justify-between items-center p-5 bg-[#FFECA1] rounded-xl border border-orange-950 -translate-x-[270px] translate-y-7 absolute">
                  <div className="flex flex-col w-full gap-y-4">
                    <p className="text-xl font-semibold">Korpa</p>
                    <div className="h-[1px] bg-gray-800 w-full"></div>
                  </div>

                  <div className="flex flex-col w-full h-full gap-y-2 overflow-y-auto">
                    {cartItems.map((cItem) => (
                      <div className="flex flex-row w-full h-fit gap-x-5 justify-between items-center border border-gray-800 p-1">
                        <div className="flex w-10 h-10 justify-center items-center border border-gray-800">
                          <p>
                            {cItem.planerType
                              ? cItem.planerType.name[0]
                              : cItem.name[0]}
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <p>
                            {cItem.planerType
                              ? cItem.planerType.name
                              : cItem.name}
                          </p>
                          <p>Price: {cItem.price}</p>
                        </div>
                        <div
                          onClick={() => removeCartItem(cItem.id)}
                          className="flex flex-col w-10 h-10 items-center justify-center text-lg hover:bg-orange-400 hover:rounded-xl cursor-pointer"
                        >
                          <FaTrash />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col w-full gap-y-3">
                    <div className="flex flex-row w-full justify-between">
                      <p>Cena: </p>
                      <p>{price} din</p>
                    </div>
                    <div
                      onClick={() => generatePdf()}
                      className="flex w-full h-fit p-3 justify-center items-center cursor-pointer bg-orange-400"
                    >
                      Kupi
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full h-8 bg-[#FFECA1] justify-center items-center gap-x-40 text-black">
        <p
          className={`cursor-pointer hover:bg-orange-400 ${
            selectedMenuItem === "Planeri" && "bg-orange-400"
          } p-1 rounded-lg`}
          onClick={() => {
            setSelectedMenuItem("Planers");
            navigate("/planers");
          }}
        >
          Planeri
        </p>
        <p
          className={`cursor-pointer hover:bg-orange-400 ${
            selectedMenuItem === "Personalize" && "bg-orange-400"
          } p-1 rounded-lg`}
          onClick={() => {
            setSelectedMenuItem("Personalize");
            navigate("/personalize");
          }}
        >
          Personalizuj
        </p>
        <p
          className={`cursor-pointer hover:bg-orange-400 ${
            selectedMenuItem === "About" && "bg-orange-400"
          } p-1 rounded-lg`}
          onClick={() => {
            setSelectedMenuItem("About");
            navigate("/aboutPlanners");
          }}
        >
          O planerima
        </p>
        {/* {user.role_id === 1 && ( */}
        <p
          className={`cursor-pointer hover:bg-orange-400 ${
            selectedMenuItem === "Manage" && "bg-orange-400"
          } p-1 rounded-lg`}
          onClick={() => {
            setSelectedMenuItem("Manage");
            navigate("/manage");
          }}
        >
          Upravljanje podacima
        </p>
        {/* )} */}
        <p
          className={`cursor-pointer hover:bg-orange-400 ${
            selectedMenuItem === "Contact" && "bg-orange-400"
          } p-1 rounded-lg`}
          onClick={() => {
            setSelectedMenuItem("Contact");
            navigate("/contact");
          }}
        >
          Kontakt
        </p>
      </div>
    </div>
  );
}
