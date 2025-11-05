export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <video
        controls={false}
        loop
        autoPlay
        className="w-full h-full object-cover"
      >
        <source src="/nature copy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
