import axios from "axios";

export const usePlanersService = () => {
  const getPlanersRequest = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/planers");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createPlanerRequest = async (planer, callback) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/planers",
        planer
      );
      if (response.status === 200) {
        callback(response.data.createdPlaner);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePlanerRequest = async (planerId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/planers/${planerId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { getPlanersRequest, createPlanerRequest, deletePlanerRequest };
};
