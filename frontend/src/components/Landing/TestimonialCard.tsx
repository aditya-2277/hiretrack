import { type TestimonialCardProps } from "../../types/props";

function TestimonialCard({ quote, name, role, company }: TestimonialCardProps) {
  return (
    <article className="rounded-[1.15rem] border border-primary/10 bg-surface/55 p-6 backdrop-blur transition-colors hover:bg-blue-950/50">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 ring-1 ring-primary/20">
        <span className="material-symbols-outlined text-sm text-primary">
          format_quote
        </span>
      </div>
      <p className="mt-5 text-sm leading-7 text-sky-100/75">{quote}</p>
      <div className="mt-6 border-t border-primary/10 pt-4">
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="mt-1 text-sm text-sky-100/55">
          {role} - {company}
        </p>
      </div>
    </article>
  );
}

export default TestimonialCard;
