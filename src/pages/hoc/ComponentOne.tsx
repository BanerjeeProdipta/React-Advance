import withCounter from "../../components/hocs";

function ComponentOne(props: any) {
  const { count, increment, name } = props;
  return (
    <div>
      <button type="button" onClick={increment}>
        {name}: {count}
      </button>
    </div>
  );
}

const ComponentOneWithCounter = withCounter(ComponentOne);
export default ComponentOneWithCounter;
