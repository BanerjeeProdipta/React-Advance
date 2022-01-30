import React, { useState } from 'react';

const Checkbox = ({ children }: any) => {
  const [checked, setChecked] = useState(false);

  return React.Children.map(children, (child) => {
    console.log(child);
    if (typeof child.type !== 'function') {
      return child;
    }

    const clone = React.cloneElement(child, {
      checked,
      setChecked,
    });
    return clone;
  });
};

export default Checkbox;
