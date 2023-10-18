import axios from "axios";

export const getUser = (page: number) => {
  return axios.get(`https://randomuser.me/api?results=10&page=${page}`);
};
