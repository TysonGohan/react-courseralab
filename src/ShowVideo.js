import ReactPlayer from "react-player";
import ReactPlayerYT from "react-player/youtube";

const ShowVideo = () => {
  return (
    <>
      <h1> Different methods on how to show Videos in React</h1>
      <h3>Local video from assets</h3>
      <ReactPlayer url={require("./assets/SampleVideo.mp4")} />
      <h3>Youtube or other links</h3>
      <ReactPlayerYT
        url="https://www.youtube.com/watch?v=s7jb3-P74Y0&pp=ygUXa2FuZGFyIGFsYW5nYXJhbSBwYXJ0IDI%3D"
        playing={true}
        volume={0.5}
      />
    </>
  );
};

export { ShowVideo };
