import goku from "./assets/goku.jpg";

const ShowImage = () => {
  return (
    <>
      <h1> Types on how to show Images in React</h1>

      <img src={goku} alt="This is goku direclt from assets" />
    </>
  );
};

export { ShowImage };
