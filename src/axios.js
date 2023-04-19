import axios, { Axios } from "axios";
 const axiosGET= axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
export default axiosGET