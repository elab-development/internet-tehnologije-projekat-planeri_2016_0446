import axios from "axios";

export const useOrdersService = () => {
  const getOrdersRequest = async () => {
    let userToken = localStorage.getItem("userToken");
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/orders", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createOrderRequest = async (orderRequest) => {
    let userToken = localStorage.getItem("userToken");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/orders",
        orderRequest,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const generatePdfRequest = async (generatePdfRequest) => {
    try {
      const response = await axios({
        url: "http://127.0.0.1:8000/api/generate-pdf",
        method: "POST",
        data: generatePdfRequest,
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "bill.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
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
    createOrderRequest,
    generatePdfRequest,
    updateOrderRequest,
    deleteOrderRequest,
  };
};
