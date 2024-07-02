import axios from "axios";

export const useProductsService = () => {
  const getProductsRequest = async () => {
    try {
      // Make a GET request using Axios
      const response = await axios.get("http://127.0.0.1:8000/api/products");
      return response.data;
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  };

  const getProductsBySearchRequest = async (search) => {
    try {
      // Make a GET request using Axios
      const response = await axios.get(
        `http://127.0.0.1:8000/api/products/search=${search}`
      );
      return response.data;
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  };
  return { getProductsRequest, getProductsBySearchRequest };
};
