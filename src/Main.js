import InitialForm from "./InitialForm";

export default function Main() {
  return (
    <div className="main-wrapper">
      <main className="main">
        <Content />
      </main>
    </div>
  );
}

function Content() {
  return (
    <section className="content">
      <InitialForm />
    </section>
  );
}
