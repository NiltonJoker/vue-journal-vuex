import axios from "axios";

const journalApi = axios.create({
  baseURL: 'https://vue-demos-d8f1b-default-rtdb.firebaseio.com'
})

export default journalApi