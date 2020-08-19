const axios = require("axios")

const API = {
    login: function (userData) {
        return axios.post("http://localhost:8080/api/users/login", userData, { withCredentials: true })
    },
    createAccount:function(userData){
        return axios.post("http://localhost:8080/api/users/createAccount",userData)
    },
    getCurrentUser:function(){
        return axios.get("http://localhost:8080/api/users/readsessions",{withCredentials:true})
    },
   CreatEvents:function(userData){
       return axios.post("http://localhost:8080/api/users/CreateEvents", userData )
   } 
}

export default API