import { useState } from 'react';

const withCounter = (WrappedComponent: any) => {
  function counter(props: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);
    function increment() {
      setCount(count + 1);
    }
    // eslint-disable-next-line react/jsx-no-bind
    return <WrappedComponent count={count} increment={increment} {...props} />;
  }
  return counter;
};

export default withCounter;
