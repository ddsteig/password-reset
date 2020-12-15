import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  createAuth: function (credentials) {
    return axios.post("/auth", credentials);
  },
  getUser: (userPW) => {
    return axios.get("/api/users/" + userPW);
  },
};
