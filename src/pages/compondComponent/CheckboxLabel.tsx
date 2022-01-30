function CheckboxLabel({ children, checked, setChecked }: any) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
      <button type="button" onClick={() => setChecked(!checked)}>
        {children}
      </button>
    </label>
  );
}

export default CheckboxLabel;
