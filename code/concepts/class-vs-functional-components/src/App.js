import "./styles.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

export default function App() {
  return (
    <div className="flex-container">
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
}
