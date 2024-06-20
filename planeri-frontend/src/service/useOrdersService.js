import axios from "axios";

export const useOrdersService = () => {
  const getOrdersRequest = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/orders");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateOrderRequest = async (order, orderId) => {
    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/orders/${orderId}`,
        order
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrderRequest = async (orderId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/orders/${orderId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getOrdersRequest,
    updateOrderRequest,
    deleteOrderRequest,
  };
};
