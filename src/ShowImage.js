import goku from "./assets/goku.jpg";

const ShowImage = () => {
  const imageUrl =
    "https://w0.peakpx.com/wallpaper/337/296/HD-wallpaper-goku-goku-dragon-ball-z-thumbnail.jpg";

  return (
    <>
      <h1> Different methods on how to show Images in React</h1>
      <h3> From assets as expression</h3>
      <img src={goku} alt="This is goku direclt from assets" />
      <h3> From assets as require</h3>
      <img
        src={require("./assets/goku.jpg")}
        alt="This is goku direclt from assets"
      />
      <h3> From url</h3>
      <img src={imageUrl} alt="This is goku direclt from assets" />
    </>
  );
};

export { ShowImage };
