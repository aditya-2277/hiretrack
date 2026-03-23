import type { IconType } from "react-icons";

type DashboardCardProps = {
  card_title: string;
  num_metric: string;
  trend: string;
  trend_icon: string;
  card_desc: string;
  card_icon: IconType;
  card_icon_colour: string;
};

function DashboardCard({
  card_title,
  num_metric,
  trend,
  trend_icon,
  card_desc,
  card_icon: CardIcon,
  card_icon_colour,
}: DashboardCardProps) {
  return (
    <div className="relative flex flex-col gap-4 rounded-xl p-6 hover:bg-card bg-card/70 border border-white/5 shadow-sm  overflow-hidden group">
      <div
        className={`absolute top-0 right-0 p-2 ${card_icon_colour} transition-colors`}
      >
        <span className="text-6xl">
          <CardIcon />
        </span>
      </div>
      <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">
        {card_title}
      </p>
      <div className="flex items-end gap-3">
        <p className="text-slate-900 dark:text-slate-100 text-4xl font-black">
          {num_metric}
        </p>
        <span className="bg-emerald-500/10 text-emerald-500 text-xs font-bold px-2 py-1 rounded-full flex items-center mb-1">
          <span className="material-symbols-outlined text-sm">
            {trend_icon}
          </span>
          {trend}
        </span>
      </div>
      <p className="text-slate-400 dark:text-slate-500 text-xs">{card_desc}</p>
    </div>
  );
}

export default DashboardCard;
