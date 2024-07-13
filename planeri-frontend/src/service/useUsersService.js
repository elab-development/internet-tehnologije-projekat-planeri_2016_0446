import axios from "axios";

export const useUsersService = () => {
  const getUsersRequest = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/users");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserRequest = async (user, userId) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/users/${userId}`,
        user
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserRequest = async (userId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/users/${userId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getRolesRequest = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/roles");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getUsersRequest,
    updateUserRequest,
    deleteUserRequest,
    getRolesRequest,
  };
};
