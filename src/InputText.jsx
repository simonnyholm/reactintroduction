import { useState } from "react";

const InputText = () => {
  const [value, setValue] = useState("init value");

  let [name, setName] = useState("Gurli");
  let [age, setAge] = useState("39");

  const handleClick = () => {
    setName("Frida");
    setAge("40");
  };

  return (
    <>
      <p>{value}</p>
      <p>
        {name} er {age} år gammel
      </p>
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
