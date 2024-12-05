import axios from "axios";

export const useProductsService = () => {
  const getProductsRequest = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/products");
      return response.data;
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  };

  const getProductsByIdsRequest = async (productsIds) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/productsByIds",
        productsIds
      );
      return response.data;
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  };

  const getProductsBySearchRequest = async (search) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/products/search=${search}`
      );
      return response.data;
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  };
  return {
    getProductsRequest,
    getProductsByIdsRequest,
    getProductsBySearchRequest,
  };
};
