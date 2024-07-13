import { useEffect } from "react";

export default function Home({ cartItems, setCartItems }) {
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
        <p className="text-2xl">Sta nas cini drugacijim...</p>
        <p>NAJBOLJE PRILAGODJENI PLANERI</p>
      </div>

      <div className="flex flex-row w-full gap-x-5 justify-center">
        <div className="flex flex-col w-[15%]">
          <div className="flex h-32 justify-center items-center border border-black p-5">
            <p>Slika1</p>
          </div>
          <p>Prilagodjeni layout</p>
        </div>
        <div className="flex flex-col w-[15%]">
          <div className="flex h-32 justify-center items-center border border-black p-5">
            <p>Slika2</p>
          </div>
          <p>Personalizovana korica</p>
        </div>
        <div className="flex flex-col w-[15%]">
          <div className="flex h-32 justify-center items-center border border-black p-5">
            <p>Slika3</p>
          </div>
          <p>Biranje pocetnog meseca</p>
        </div>
        <div className="flex flex-col w-[15%]">
          <div className="flex h-32 justify-center items-center border border-black p-5">
            <p>Slika4</p>
          </div>
          <p>Sekcija za beleske</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col">
          <p className="text-2xl">Savrseni planer za tebe</p>
          <p>2 NACINA DA GA PRILAGODITE SEBI</p>
        </div>
        <div className="flex flex-row w-full justify-center gap-x-20 mb-5">
          <div className="flex flex-col w-full h-[350px] justify-between items-center border border-black gap-y-3 py-2 px-10">
            <p>OPCIJA 1</p>
            <div className="flex flex-col justify-center items-center gap-y-2">
              <p>3 brza koraka</p>
              <div className="h-[1px] w-[50%] bg-black"></div>
            </div>

            <ul className="list-disc text-left">
              <li>jednostavniji proces porudzbine</li>
              <li>personalizovana korica</li>
              <li>izbor velicine</li>
            </ul>

            <div className="flex w-[80%] h-8 justify-center items-center border border-black rounded-lg hover:bg-green-600 cursor-pointer">
              <p>BRZA KUPOVINA</p>
            </div>
          </div>
          <div className="flex flex-col w-full h-[350px] justify-between items-center border border-black gap-y-3 py-2 px-10">
            <p>OPCIJA 2</p>
            <div className="flex flex-col justify-center items-center gap-y-2">
              <p>Potpuno prilagodjavanje</p>
              <div className="h-[1px] w-[50%] bg-black"></div>
            </div>

            <ul className="list-disc text-left">
              <li>personalizovana korica</li>
              <li>izbor layouta</li>
              <li>beleske</li>
            </ul>

            <div className="flex w-[80%] h-8 justify-center items-center border border-black rounded-lg hover:bg-green-600 cursor-pointer">
              <p>PERSONALIZUJ SVE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
