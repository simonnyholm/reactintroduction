import { useState } from "react";

const InputText = () => {
  const [value, setValue] = useState("init value");

  const handleClick = () => {};

  return (
    <>
      <p>{value}</p>
      <input
        onChange={(event) => {
          setValue(event.target.value);
        }}
        type="text"
        name=""
        id="inputText"
      />
      <button onClick={handleClick}>Klik bare her!</button>
    </>
  );
};

export default InputText;
