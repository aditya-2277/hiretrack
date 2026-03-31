import { featureCards } from "../../data/marketing";

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="container flex flex-col items-center justify-center mx-auto px-6">
        <h2 className="text-4xl font-bold ">Everything you need to succeed</h2>
        <p className="mt-4 text-lg">
          Stay organized and ahead of the competition with our powerful suite of
          job tracking and preparation tools.
        </p>
        <div className="mt-10 px-20 grid gap-8 sm:grid-cols-3 w-full">
          {featureCards.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-primary/10 bg-surface/55 p-5 backdrop-blur hover:bg-blue-950/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 ring-1 ring-primary/20">
                <span className="material-symbols-outlined text-sm text-primary">
                  {feature.material_logo}
                </span>
              </div>
              <h2 className="mt-4 text-sm font-semibold text-foreground">
                {feature.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-sky-100/55">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
