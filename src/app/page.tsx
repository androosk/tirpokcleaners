import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          height: "100%",
          width: "100%",
          objectFit: "fill",
          zIndex: "-1",
        }}
      >
        <source src="/images/clothes.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
