import React, { Suspense } from 'react';
import ErrorBoundary from './components/errorBoundary';
import CompoundComponent from './pages/compondComponent';
import MovieList from './pages/context';
import HOC from './pages/hoc';
import './styles/tailwind.css';

const BuggyComponent = React.lazy(() => import('./pages/BuggyComponent'));

function App() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <div className="container p-6 mx-auto">
        <div className="prose-h1:text-3xl prose-h2:text-lg prose-headings:font-semibold flex flex-col items-center">
          <div className="space-y-8">
            <CompoundComponent />
            <MovieList />
            <ErrorBoundary>
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
