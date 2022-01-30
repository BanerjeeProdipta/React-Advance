import withCounter from '../../components/hocs';

function ComponentTwo(props: any) {
  const { count, increment, name } = props;
  return (
    <div>
      <button type="button" onClick={increment}>
        <p>
          {name}
          <span>{count}</span>
        </p>
      </button>
    </div>
  );
}

const ComponentTwoWithCounter = withCounter(ComponentTwo);
export default ComponentTwoWithCounter;
