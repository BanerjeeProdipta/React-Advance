function CheckboxInput({ checked, setChecked }: any) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => setChecked(!checked)}
      className="mr-2"
    />
  );
}

export default CheckboxInput;
