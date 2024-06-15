import { useEffect, useState } from "react";
import { useProductsService } from "../service/useProductsService";

export default function Planers() {
  const [products, setProducts] = useState([]);
  const { getProductsRequest } = useProductsService();

  const getProductsData = async () => {
    await getProductsRequest().then((result) => setProducts(result));
  };

  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <div className="flex flex-col h-[560px] w-full overflow-y-auto px-20">
      <div className="flex flex-wrap w-full h-full justify-center items-center  gap-x-2 gap-y-2">
        {products.map((prod) => (
          <div className="flex flex-col justify-center items-center bg-red-400 w-[30%] h-[350px]">
            <p>{prod.name}</p>
            <p>{prod.size}</p>
            <p>{prod.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
