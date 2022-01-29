import CompoundComponent from "./pages/CompoundComponent";
import MovieList from "./pages/context";
import "./styles/tailwind.css";

function App() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <div className="container p-6 mx-auto">
        <div className="space-y-8 header:text-5xl">
          <CompoundComponent />
          <MovieList />
        </div>
      </div>
    </div>
  );
}

export default App;
