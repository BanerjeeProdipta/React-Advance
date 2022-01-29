import { useState } from "react";

const withCounter = (WrappedComponent: any) => {
  function counter(props: any) {
    const [count, setCount] = useState(0);
    function increment() {
      setCount(count + 1);
    }
    return <WrappedComponent count={count} increment={increment} {...props} />;
  }
  return counter;
};

export default withCounter;
