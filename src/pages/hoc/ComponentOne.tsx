import withCounter from "../../components/hocs";

const ComponentOne = (props: any) => {
  const { count, increment, name } = props;
  return (
    <div>
      <button onClick={increment}>
        {name}: {count}
      </button>
    </div>
  );
};

const ComponentOneWithCounter = withCounter(ComponentOne);
export default ComponentOneWithCounter;
