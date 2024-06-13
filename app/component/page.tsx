import Documents from "../_components/Documents";


export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-between">
      <section className="mt-6">
      <h1 className="mb-6 text-3xl text-white">Component</h1>
        <Documents inputType={"component"}/>
      </section>
    </main>
  );
}