import ErrorBoundary from "./components/errorBoundary";
import BuggyComponent from "./pages/BuggyComponent";
import CompoundComponent from "./pages/CompoundComponent";
import MovieList from "./pages/context";
import "./styles/tailwind.css";

function App() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <div className="container p-6 mx-auto">
        <div className="space-y-8 prose-h1:text-3xl prose-h2:text-lg prose-headings:font-semibold">
          <CompoundComponent />
          <MovieList />
          <ErrorBoundary>
            <BuggyComponent />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;
