import axios from "axios";

const instance = axios.create({
   
        baseURL : "https://burger-react-app-2faba.firebaseio.com/"
   //   baseURL: "https://testing-396d6.firebaseio.com/"
});

export default instance;