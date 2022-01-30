function CheckboxLabel({ children, checked, setChecked }: any) {
  return (
    <label>
      <button type="button" onClick={() => setChecked(!checked)}>
        {children}
      </button>
    </label>
  );
}

export default CheckboxLabel;
