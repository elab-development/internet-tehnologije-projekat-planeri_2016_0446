import axios from "axios";

export const useAuthService = () => {
  const registerRequest = async (userData, callback) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        userData
      );
      if (response.status === 200) {
        callback(response.data.data);
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const loginRequest = async (userData) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/login`,
        userData
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    registerRequest,
    loginRequest,
  };
};
