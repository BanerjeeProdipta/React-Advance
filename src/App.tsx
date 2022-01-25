import CompoundComponent from "./pages/CompoundComponent";
import "./styles/tailwind.css";

function App() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <div className="container p-6 mx-auto">
        <div>
          <CompoundComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
