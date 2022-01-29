import { useState } from "react";

const BuggyComponent = () => {
  const [counter, setCounter] = useState(0);

  console.log(counter);

  if (counter === 5) {
    throw new Error("I crashed!");
  }

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
};

export default BuggyComponent;
