const Button = () => {
  const handleFirstButton = (name) => {
    console.log(`Hej ${name}`);
  };

  return (
    <>
      <button
        onClick={() => {
          handleFirstButton("Simon");
        }}
      >
        Klik på knappen!
      </button>
    </>
  );
};

export default Button;
