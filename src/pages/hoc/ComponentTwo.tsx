import withCounter from "../../components/hocs";

function ComponentTwo(props: any) {
  const { count, increment, name } = props;
  return (
    <div>
      <button type="button" onClick={increment}>
        {name}: {count}
      </button>
    </div>
  );
}

const ComponentTwoWithCounter = withCounter(ComponentTwo);
export default ComponentTwoWithCounter;
