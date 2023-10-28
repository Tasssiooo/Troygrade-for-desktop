import splashscreenVideo from "../../../assets/videos/troygrade_splashscreen.mp4";

const Splashscreen = () => {
  return (
    <main>
      <div data-tauri-drag-region class="dragging-area"></div>
      <video
        width="1024"
        height="576"
        muted
        autoPlay
        loop
      >
        <source src={splashscreenVideo} type="video/mp4" />
      </video>
    </main>
  );
};

export default Splashscreen;
