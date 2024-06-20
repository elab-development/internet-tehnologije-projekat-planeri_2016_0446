import axios from "axios";

export const usePlanerLayoutsService = () => {
  const getPlanerLayoutsRequest = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/planerLayouts"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createPlanerLayoutRequest = async (planerLayout) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/planerLayouts",
        planerLayout
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updatePlanerLayoutRequest = async (planerLayout, planerLayoutId) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/planerLayouts/${planerLayoutId}`,
        planerLayout
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deletePlanerLayoutRequest = async (planerLayoutId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/planerLayouts/${planerLayoutId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getPlanerLayoutsRequest,
    createPlanerLayoutRequest,
    updatePlanerLayoutRequest,
    deletePlanerLayoutRequest,
  };
};
