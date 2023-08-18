import axios from "axios";

export const getProfile = async () => {
  const response = await axios.get("https://dummyjson.com/users/1");
  console.log(response.data);
  return response.data;
};
