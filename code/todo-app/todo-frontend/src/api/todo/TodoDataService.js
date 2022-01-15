import axios from "axios";

class TodoDataService {
  retrieveAllToDos() {
    // returns a Promise
    return axios.get("http://localhost:8801/todos");
  }
}

export default new TodoDataService();
