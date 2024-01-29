import nallEn from "./assets/Naal En Seiyum.mp3";

const ShowAudio = () => {
  const birdAudio = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const naalAudio = new Audio(nallEn);

  function nallPlaypause() {
    if (naalAudio.paused) {
      naalAudio.play();
    } else {
      naalAudio.pause();
    }
  }

  function playpause() {
    if (birdAudio.paused) {
      birdAudio.play();
    } else {
      birdAudio.pause();
    }
  }

  return (
    <>
      <h1> Show how to play a audio</h1>
      <h3> From Assets </h3>
      <button onClick={nallPlaypause}>Nall En Seiyum</button>
      <h3> From URL </h3>
      <button onClick={playpause}>Bird from URL</button>
    </>
  );
};

export { ShowAudio };
