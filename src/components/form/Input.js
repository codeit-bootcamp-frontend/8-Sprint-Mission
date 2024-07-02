function Input() {
  const handChangInput = e => {
    let { name, value } = e.target;
    changValue(name, value);
  };

  return (
    <div className="">
      <label>{lable}</label>
      <input className="input" id={id} {...props} onChange={handChangInput} />
    </div>
  );
}
export default Input;
