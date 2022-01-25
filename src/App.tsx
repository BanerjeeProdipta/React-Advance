import CompoundComponent from "./pages/CompoundComponent";
import "./styles/tailwind.css";

function App() {
  return (
    <div className="App">
      <p className="text-3xl font-bold underline">Hello world!</p>
      <div>
        <CompoundComponent />
      </div>
    </div>
  );
}

export default App;
