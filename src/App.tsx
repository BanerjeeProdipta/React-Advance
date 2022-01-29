import ErrorBoundary from "./components/errorBoundary";
import BuggyComponent from "./pages/BuggyComponent";
import CompoundComponent from "./pages/CompoundComponent";
import MovieList from "./pages/context";
import HOC from "./pages/hoc";
import "./styles/tailwind.css";

function App() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <div className="container p-6 mx-auto">
        <div className="prose-h1:text-3xl prose-h2:text-lg prose-headings:font-semibold flex flex-col items-center">
          <div className="space-y-8">
            <CompoundComponent />
            <MovieList />
            <ErrorBoundary>
              <BuggyComponent />
            </ErrorBoundary>
            <HOC />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
