function FlieInput() {
  const handleChange = (e) => {
    console.log(e.target.files);
  };
  return <input type="file" onChange={handleChange} />;
}

export default FlieInput;
