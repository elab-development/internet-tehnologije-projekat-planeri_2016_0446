import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
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
            <FaUser className="size-6 cursor-pointer" />
            <FaShoppingCart className="size-6 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full h-8 bg-green-900 justify-center items-center gap-x-40 text-white">
        <p>Planeri</p>
        <p>Personalizuj</p>
        <p>O planerima</p>
        <p>Upravljanje podacima</p>
        <p>Kontakt</p>
      </div>
    </div>
  );
}
