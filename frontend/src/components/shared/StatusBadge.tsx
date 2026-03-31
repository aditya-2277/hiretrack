type StatusBadgeProps = {
  status: string;
};

const statusClasses: Record<string, string> = {
  Applied: "border border-blue-500/20 bg-blue-500/15 text-blue-400",
  Interview: "border border-amber-500/20 bg-amber-500/15 text-amber-400",
  Offer: "border border-emerald-500/20 bg-emerald-500/15 text-emerald-400",
  Rejected: "border border-rose-500/20 bg-rose-500/15 text-rose-400",
};

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
        statusClasses[status] ??
        "border border-slate-600 bg-slate-700/40 text-slate-300"
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
