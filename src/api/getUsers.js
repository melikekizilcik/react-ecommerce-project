import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("https://dummyjson.com/users");
  console.log(response.data.users);
  return response.data.users;
};
