import { type PricingCardProps } from "../../types/props";

function PricingCard({
  plan,
  monthlyPrice,
  yearlyPrice,
  ctaLabel,
  features,
  isPopular = false,
  isMonthly,
}: PricingCardProps) {
  return (
    <article
      className={
        "relative flex min-h-100 flex-col rounded-2xl border border-primary/20 bg-gray-900 px-7 py-7 shadow-gray-800 sm:px-8 hover:border-primary hover:scale-105 transition-all"
      }
    >
      {isPopular ? (
        <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
          Most Popular
        </span>
      ) : null}

      <p
        className={[
          "text-xs font-semibold uppercase tracking-[0.24em]",
          isPopular ? "text-primary" : "text-slate-400",
        ].join(" ")}
      >
        {plan}
      </p>

      <div className="mt-3 flex items-end gap-1 text-foreground">
        <span className="text-5xl font-bold tracking-tight">
          ${isMonthly ? monthlyPrice : yearlyPrice}
        </span>
        <span className="mb-1 text-xl font-semibold text-slate-400">
          {isMonthly ? "/mo" : "/yr"}
        </span>
      </div>

      <button
        type="button"
        className={[
          "mt-8 rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
          isPopular
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-[#1d2738] text-foreground hover:bg-[#243044]",
        ].join(" ")}
      >
        {ctaLabel}
      </button>

      <ul className="mt-8 space-y-5">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-slate-300"
          >
            <span className="material-symbols-outlined mt-0.5 text-base leading-none text-primary">
              check_circle
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default PricingCard;
