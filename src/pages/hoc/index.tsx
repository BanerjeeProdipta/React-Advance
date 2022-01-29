import ComponentOneWithCounter from "./ComponentOne";
import ComponentTwoWithCounter from "./ComponentTwo";

const HOC = () => {
  return (
    <div>
      <h1>HOC:</h1>
      <p className="italic text-xs max-w-sm text-gray-500 mb-4">
        (HOC) is an advanced technique in React for reusing component logic. Concretely, a
        higher-order component is a function that takes a component and returns a new component.
      </p>
      <ComponentOneWithCounter name="Component 1" />
      <ComponentTwoWithCounter name="Component 2" />
    </div>
  );
};

export default HOC;
