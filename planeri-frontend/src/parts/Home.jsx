import { useEffect } from "react";
import { useNavigate } from "react-router";
import personalizedCover from "../images/personalizedCoverHome.png";
import customLayout from "../images/customLayoutHome.png";
import sectionNotes from "../images/sectionNotesHome.png";
import startDate from "../images/startDateHome.png";

export default function Home({ cartItems, setCartItems }) {
  const navigate = useNavigate();
  const getCartItems = () => {
    var cItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const totalPrice = cItems.reduce(
      (sum, item) => sum + parseInt(item.price),
      0
    );

    setCartItems(cItems);
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div className="flex flex-col w-full h-fit justify-center items-center gap-y-20">
      <div className="flex flex-col pt-5">
        <p className="text-2xl">Sta nas čini drugačijim...</p>
        <p>NAJBOLJE PRILAGODJENI PLANERI</p>
      </div>

      <div className="flex flex-row w-full gap-x-5 justify-center">
        <div className="flex flex-col w-[15%]">
          <div className="flex h-fit w-fit justify-center items-center p-5">
            <img src={personalizedCover} alt="" />
          </div>
          <p>Prilagodjeni layout</p>
        </div>
        <div className="flex flex-col w-[15%]">
          <div className="flex h-fit w-fit justify-center items-center p-5">
            <img src={customLayout} alt="" />
          </div>
          <p>Personalizovana korica</p>
        </div>
        <div className="flex flex-col w-[15%]">
          <div className="flex h-fit w-fit justify-center items-center p-5">
            <img src={startDate} alt="" />
          </div>
          <p>Biranje početnog meseca</p>
        </div>
        <div className="flex flex-col w-[15%]">
          <div className="flex h-fit w-fit justify-center items-center p-5">
            <img src={sectionNotes} alt="" />
          </div>
          <p>Sekcija za beleške</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col">
          <p className="text-2xl">Savršeni planer za tebe</p>
          <p>2 NAČINA DA GA PRILAGODITE SEBI</p>
        </div>
        <div className="flex flex-row w-full justify-center gap-x-20 mb-5">
          <div className="flex flex-col w-full h-[350px] justify-between items-center border rounded-lg border-black gap-y-3 py-2 px-10">
            <p>OPCIJA 1</p>
            <div className="flex flex-col justify-center items-center gap-y-2">
              <p>3 brza koraka</p>
              <div className="h-[1px] w-[50%] bg-black"></div>
            </div>

            <ul className="list-disc text-left">
              <li>jednostavniji proces porudžbine</li>
              <li>personalizovana korica</li>
              <li>izbor veličine</li>
            </ul>

            <div
              onClick={() => navigate("/planers")}
              className="flex w-[80%] h-8 justify-center items-center border border-black rounded-lg hover:bg-orange-400 cursor-pointer"
            >
              <p>BRZA KUPOVINA</p>
            </div>
          </div>
          <div className="flex flex-col w-full h-[350px] justify-between items-center border rounded-lg border-black gap-y-3 py-2 px-10">
            <p>OPCIJA 2</p>
            <div className="flex flex-col justify-center items-center gap-y-2">
              <p>Potpuno prilagodjavanje</p>
              <div className="h-[1px] w-[50%] bg-black"></div>
            </div>

            <ul className="list-disc text-left">
              <li>personalizovana korica</li>
              <li>izbor layouta</li>
              <li>beleške</li>
            </ul>

            <div
              onClick={() => navigate("/personalize")}
              className="flex w-[80%] h-8 justify-center items-center border border-black rounded-lg hover:bg-orange-400 cursor-pointer"
            >
              <p>PERSONALIZUJ SVE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
