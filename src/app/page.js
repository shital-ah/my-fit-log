import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0d0f] text-white">
      <Navbar />

      <section className="flex min-h-[70vh] items-center justify-center">
        <h1 className="text-4xl font-bold text-[#ccff00]">
          FitLog
        </h1>
      </section>
    </main>
  );
}