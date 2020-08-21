const axios = require("axios")

const API = {
    login: function (userData) {
        return axios.post("http://localhost:8080/api/users/login", userData)
    },
    createAccount:function(userData){
        return axios.post("http://localhost:8080/api/users/createAccount",userData)
    },
    getCurrentUser:function(){
        return axios.get("http://localhost:8080/api/users/readsessions",{widthCredentials:true})
    },
    
}

export default API;