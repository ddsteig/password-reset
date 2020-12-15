import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getMealByType: function (id, type) {
    return axios.get(`/api/meals/${id}/${type}`);
  },

  getAPIFood: function (diet, food) {
    return axios.get("/api/getfoods/" + diet + "/" + food);
  },

  deleteFood: function (id) {
    return axios.delete("/api/meals/" + id);
  },

  saveFood: function (foodData) {
    return axios.post("/api/meals", foodData);
  },
};
