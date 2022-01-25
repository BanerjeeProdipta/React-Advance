import React, { useState } from "react";

const CompoundComponent = () => {
  const Checkbox = ({ children }: any) => {
    const [checked, setChecked] = useState(false);

    return React.Children.map(children, (child) => {
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
        name=""
        id=""
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="h-10"
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
      <Checkbox>
        <CheckboxLabel>Checkbox Label</CheckboxLabel>
        <CheckboxInput />
      </Checkbox>
    </div>
  );
};

export default CompoundComponent;