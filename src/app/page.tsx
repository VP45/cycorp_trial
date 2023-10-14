import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      <Navbar />
  <video
    autoPlay
    loop
    muted
    className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
  >
    <source
      src="/hero.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</div>
  )
}
