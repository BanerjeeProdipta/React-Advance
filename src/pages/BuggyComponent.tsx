import { useState } from 'react';

function BuggyComponent() {
  const [counter, setCounter] = useState(0);

  console.log(counter);

  if (counter === 5) {
    throw new Error('I crashed!');
  }

  return (
    <div>
      <h1>ERROR BOUNDARY: </h1>
      <p className="italic text-xs max-w-sm text-gray-500">Click upto 5 to trigger the error.</p>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        {counter}
      </button>
    </div>
  );
}

export default BuggyComponent;
