import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter by={1} />
      <Counter by={5} />
      <Counter by={10} />
      <Counter by={100} />
    </div>
  );
}

export default App;
