import "./styles.css";
import "./components/UseCase1";
import UseCase1 from "./components/UseCase1";
import UseCase2 from "./components/UseCase2";
import UseCase3 from "./components/UseCase3";

const App = () => {
  return (
    <div className="container">
      <UseCase1 />
      <UseCase2 />
      <UseCase3 />
    </div>
  );
};

export default App;
