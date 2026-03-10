const featureCards = [
  {
    title: "AI Analysis",
    description: "Get detailed analysis of your applications and role.",
    material_logo: "robot_2",
  },
  {
    title: "Smart Reminders",
    description: "Never miss a follow-up or a scheduled interview.",
    material_logo: "alarm",
  },
];

function LoginHero() {
  return (
    <section className="flex flex-col justify-between m-auto">
      <div className="max-w-xl pt-10 lg:pt-0">
        <h1 className="max-w-lg text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          The journey to your <span className="text-primary">dream job</span>{" "}
          starts here.
        </h1>
        <p className="mt-6 max-w-md text-base leading-8 text-sky-100/70 sm:text-lg">
          Manage applications, track interviews, and organize follow-ups in one
          beautiful dashboard.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {featureCards.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-primary/10 bg-surface/55 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] backdrop-blur"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 ring-1 ring-primary/20">
                <span className="material-symbols-outlined text-sm text-primary">
                  {feature.material_logo}
                </span>
              </div>
              <h2 className="mt-4 text-sm font-semibold text-foreground">
                {feature.title}
              </h2>
              <p className="mt-2 max-w-[20ch] text-sm leading-6 text-sky-100/55">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LoginHero;
