import splashscreenVideo from "../../../assets/videos/troygrade_splashscreen.mp4";

const Splashscreen = () => {
  return (
    <main>
      <div data-tauri-drag-region class="dragging-area"></div>
      <video
        src={splashscreenVideo}
        width="1024"
        height="576"
        muted
        autoplay
        loop
      ></video>
    </main>
  );
};

export default Splashscreen;
