import axios from "axios";

export const usePlanerTypesService = () => {
  const getPlanerTypesRequest = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/planerTypes");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createPlanerTypeRequest = async (planerType) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/planerTypes",
        planerType
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updatePlanerTypeRequest = async (planerType, planerTypeId) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/planerTypes/${planerTypeId}`,
        planerType
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deletePlanerTypeRequest = async (planerTypeId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/planerTypes/${planerTypeId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getPlanerTypesRequest,
    createPlanerTypeRequest,
    updatePlanerTypeRequest,
    deletePlanerTypeRequest,
  };
};
