import React, { useState } from "react";

const CompoundComponent = () => {
  const Checkbox = ({ children }: any) => {
    const [checked, setChecked] = useState(false);

    return React.Children.map(children, (child) => {
      console.log(child);
      if (typeof child.type !== "function") {
        return child;
      }

      const clone = React.cloneElement(child, {
        checked,
        setChecked,
      });
      return clone;
    });
  };

  const CheckboxInput = ({ checked, setChecked }: any) => {
    return (
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="mr-2"
      />
    );
  };

  const CheckboxLabel = ({ children, checked, setChecked }: any) => {
    return (
      <label>
        <button onClick={() => setChecked(!checked)}>{children}</button>
      </label>
    );
  };

  return (
    <div>
      <h1>COMPOUND COMPONENT:</h1>
      <Checkbox>
        <CheckboxInput />
        <p>hi</p>
        <CheckboxLabel>Checkbox Label</CheckboxLabel>
      </Checkbox>
    </div>
  );
};

export default CompoundComponent;
