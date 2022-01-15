import axios from "axios";

class TodoDataService {
  retrieveAllToDos() {
    // returns a Promise
    return axios.get("http://localhost:8801/todos");
  }

  deleteTodo(id) {
    // returns a Promise
    return axios.delete(`http://localhost:8801/todos/${id}`);
  }
}

export default new TodoDataService();
