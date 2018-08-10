import axios from "axios";

export default {
 
  // Gets the correct user and authorizes them
  getLogin: function(data) {
    return axios.post("/api/login/auth/", data)
  },
  
  // Saves a book to the database
  saveLogin: function(loginData) {
    return axios.post("/api/login/", loginData);
  },

 // Gets all scores
 getScore: function() {
  return axios.get("/api/login/score/");
},

//posts the scores
postScore: function (data){
  return axios.post("/api/login/score/", data);
},

};
