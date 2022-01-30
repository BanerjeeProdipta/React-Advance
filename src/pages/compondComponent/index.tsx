import Checkbox from "./Checkbox";
import CheckboxInput from "./CheckboxInput";
import CheckboxLabel from "./CheckboxLabel";

function CompoundComponent() {
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
}

export default CompoundComponent;
