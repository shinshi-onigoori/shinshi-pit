import Image from "next/image";
import Documents from "./_components/Documents";
import Banner from "./_components/banner";

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-between">
      <section className="w-full">
        <Banner />
      </section>
      <section className="w-90 mt-6">
        <Documents/>
      </section>
    </main>
  );
}
