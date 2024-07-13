import { useEffect, useState } from "react";
import { useOrdersService } from "../../service/useOrdersService";
import { useProductsService } from "../../service/useProductsService";

export default function PreviewOrderItems({ order, setShowOrderItems }) {
  const [ordersItems, setOrdersItems] = useState([]);
  const [customPlaners, setCustomPlaners] = useState([]);
  const [products, setProducts] = useState([]);
  const { getOrderItemsRequest } = useOrdersService();
  const { getProductsByIdsRequest } = useProductsService();

  const getOrderItemsData = async () => {
    await getOrderItemsRequest(Number(order?.id)).then(async (result) => {
      let cPlaners = [];
      let prods = [];

      result.forEach((res) => {
        if (res.planer !== null) {
          cPlaners.push(res);
        } else {
          prods.push(res);
        }
      });

      setCustomPlaners(cPlaners);

      let prodIds = prods.map((prod) => prod.planer_id);

      await getProductsByIdsRequest(prodIds).then((res) => {
        setProducts(res);
      });

      setOrdersItems(result);
    });
  };

  useEffect(() => {
    getOrderItemsData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full justify-start items-center">
      <div className="flex flex-col w-full h-full justify-center bg-[#FFECA1] p-2 gap-y-2">
        <div className="flex flex-col w-full h-full bg-[#FFFBEC]">
          <div className="flex flex-row w-full border pl-2 pr-4">
            <div className="flex w-[5%]">ID</div>
            <div className="flex w-[8%]">Korica</div>
            <div className="flex w-[14%]">Dizajn korice</div>
            <div className="flex w-[10%]">Velicina</div>
            <div className="flex w-[10%]">Tip planera</div>
            <div className="flex w-[16%]">Raspored planera</div>
            <div className="flex w-[14%]">Datumi</div>
            <div className="flex w-[10%]">Beleske</div>
            <div className="flex w-[10%]">Broj strana</div>
          </div>
          <div className="flex flex-col w-full h-[200px] overflow-y-scroll">
            {customPlaners?.map((cPlaner) => (
              <div
                className={`flex flex-row w-full border pl-2 cursor-pointer `}
              >
                <div className="flex w-[5%]">{cPlaner.id}</div>
                <div className="flex w-[8%]">{cPlaner?.planer.cover}</div>
                <div className="flex w-[14%]">
                  {cPlaner?.planer.cover_design}
                </div>
                <div className="flex w-[10%]">{cPlaner?.planer.size}</div>
                <div className="flex w-[10%]">
                  {cPlaner?.planer.planer_type?.name}
                </div>
                <div className="flex w-[16%]">
                  {cPlaner?.planer.page_layout !== null
                    ? cPlaner?.planer.page_layout
                    : "/"}
                </div>
                <div className="flex w-[14%]">
                  {cPlaner?.planer.dates !== null ? cPlaner?.planer.dates : "/"}
                </div>
                <div className="flex w-[10%]">{cPlaner?.planer.notes}</div>
                <div className="flex w-[10%]">
                  {cPlaner?.planer.page_number}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full h-full bg-[#FFFBEC]">
          <div className="flex flex-row w-full border pl-2 pr-4">
            <div className="flex w-[5%]">ID</div>
            <div className="flex w-[15%]">Naziv</div>
            <div className="flex w-[14%]">Velicina</div>
            <div className="flex w-[10%]">Cena</div>
          </div>
          <div className="flex flex-col w-full h-[200px] overflow-y-scroll">
            {products?.map((prod) => (
              <div
                className={`flex flex-row w-full border pl-2 cursor-pointer `}
              >
                <div className="flex w-[5%]">{prod?.id}</div>
                <div className="flex w-[15%]">{prod?.name}</div>
                <div className="flex w-[14%]">{prod?.size}</div>
                <div className="flex w-[10%]">{prod?.price}</div>
              </div>
            ))}
          </div>
        </div>
        <div
          onClick={() => setShowOrderItems(false)}
          className="flex w-full h-10 justify-center items-center bg-green-600 rounded-lg font-bold text-lg"
        >
          Nazad
        </div>
      </div>
    </div>
  );
}
