const ModeToggler = (props) => {
  let darkModeOn = true;
  const darkMode = <h1> Dark Mode is ON </h1>;
  const lightMode = <h1> Light Mode is ON </h1>;

  const handleMode = () => {
    darkModeOn = !darkModeOn;
  };

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleMode}> Change Mode !</button>
    </div>
  );
};

export { ModeToggler };
