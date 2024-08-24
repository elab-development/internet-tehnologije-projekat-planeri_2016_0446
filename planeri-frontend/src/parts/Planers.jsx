import { useEffect, useState } from "react";
import { useProductsService } from "../service/useProductsService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PlanerCard from "../components/reusable/PlanerCard";

export default function Planers({ products, setProducts, setCartItems }) {
  const { getProductsRequest } = useProductsService();

  const getProductsData = async () => {
    await getProductsRequest().then((result) => setProducts(result));
  };

  const addToCart = (product) => {
    var array = JSON.parse(localStorage.getItem("cart") || "[]");

    const cartItem = {
      id: array.length + 1,
      productId: product.id,
      name: product.name,
      price: product.price,
    };

    array.push(cartItem);
    setCartItems(array);
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
          <PlanerCard
            product={prod}
            text={"Dodaj u korpu"}
            handleClick={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
