import withCounter from "../../components/hocs";

const ComponentTwo = (props: any) => {
  const { count, increment, name } = props;
  return (
    <div>
      <button onClick={increment}>
        {name}: {count}
      </button>
    </div>
  );
};

const ComponentTwoWithCounter = withCounter(ComponentTwo);
export default ComponentTwoWithCounter;
