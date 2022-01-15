import axios from "axios";

class HelloWorldService {
  execute() {
    // returns a Promise
    return axios.get("http://localhost:8801/hello-world");
  }
}

export default new HelloWorldService();
