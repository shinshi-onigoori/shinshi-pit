import Documents from "../_components/Documents";


export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-between">
      <section className="mt-6">
        <Documents inputType={"component"}/>
      </section>
    </main>
  );
}