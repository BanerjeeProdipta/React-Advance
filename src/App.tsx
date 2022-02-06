import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
// import ErrorBoundary from './components/errorBoundary';
import CompoundComponent from './pages/compoundComponent';
import MovieList from './pages/context';
import Fallback from './pages/Fallback';
import HOC from './pages/hoc';
import './styles/tailwind.css';

const BuggyComponent = React.lazy(() => import('./pages/BuggyComponent'));

const errorHandler = (error: any, errorInfo: any) => {
  console.log(error, errorInfo);
};

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto p-6">
        <div className="flex flex-col items-center prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-lg">
          <div className="space-y-8">
            <CompoundComponent />
            <MovieList />
            <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
              <Suspense fallback={<div>Loading...</div>}>
                <BuggyComponent />
              </Suspense>
            </ErrorBoundary>
            <HOC />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
