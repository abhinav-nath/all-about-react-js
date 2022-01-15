import TodoApp from "./components/TodoApp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "./bootstrap.css";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoApp />
      <Footer />
    </div>
  );
}

export default App;
