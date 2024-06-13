import Documents from "../_components/Documents";


export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-between">
      <section className="my-6">
        <h1 className="mb-6 text-3xl text-white">Application</h1>
        <Documents inputType={"App"}/>
      </section>
    </main>
  );
}