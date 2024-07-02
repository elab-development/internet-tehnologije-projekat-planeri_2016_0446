import { useEffect, useState } from "react";
import { useProductsService } from "../service/useProductsService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Planers({ products, setProducts }) {
  const { getProductsRequest } = useProductsService();

  const getProductsData = async () => {
    await getProductsRequest().then((result) => setProducts(result));
  };

  const addToCart = (product) => {
    var array = JSON.parse(localStorage.getItem("cart") || "[]");

    const cartItem = {
      id: array.length === 1 ? array.length : array.length + 1,
      productId: product.id,
      name: product.name,
      price: product.price,
    };

    array.push(cartItem);

    localStorage.setItem("cart", JSON.stringify(array));
    toast(`${product.name} has been added to cart!`);
  };

  useEffect(() => {
    if (products.length == 0) {
      getProductsData();
    }
  }, []);
  return (
    <div className="flex flex-col h-[560px] w-full overflow-y-auto px-20">
      <div className="flex flex-wrap w-full h-full justify-center items-center  gap-x-2 gap-y-2">
        {products?.map((prod) => (
          <div className="flex flex-col justify-center items-center bg-red-400 w-[30%] h-[350px]">
            <p>{prod.name}</p>
            <p>{prod.size}</p>
            <p>{prod.price}</p>
            <div
              className="flex flex-col w-[80%] h-fit p-2 bg-slate-500 text-white font-semibold justify-center items-center cursor-pointer rounded-xl"
              onClick={() => addToCart(prod)}
            >
              Add to cart
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
