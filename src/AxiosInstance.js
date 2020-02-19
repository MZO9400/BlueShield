import Axios from "axios";

let instance = Axios.create({
  baseURL: "https://reactinsurancewebsite.firebaseio.com/"
});
export default instance;
