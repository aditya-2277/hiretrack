import { applications } from "../../data/data";

function AppDashTable() {
  const getStatusClasses = (status: string) => {
    switch (status) {
      case "Applied":
        return "bg-blue-500/15 text-blue-400 border border-blue-500/20";
      case "Interview":
        return "bg-amber-500/15 text-amber-400 border border-amber-500/20";
      case "Offer":
        return "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20";
      case "Rejected":
        return "bg-rose-500/15 text-rose-400 border border-rose-500/20";
      default:
        return "bg-slate-700/40 text-slate-300 border border-slate-600";
    }
  };

  return (
    <div className="rounded-4xl bg-card p-5 shadow-sm border border-white/5 cursor-default h-90">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-foreground">
          Recent Applications
        </h2>
        <p className="text-sm text-muted-foreground">
          Track the latest jobs you have applied for
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-120 text-sm text-left">
          <thead>
            <tr className="border-b border-white/10 text-muted-foreground">
              <th className="px-4 py-3 font-medium">Company</th>
              <th className="px-4 py-3 font-medium">Position</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Date Applied</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((application) => (
              <tr
                key={`${application.company}-${application.position}`}
                className="border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors"
              >
                <td
                  title={application.company}
                  className="px-4 py-4 font-medium text-foreground whitespace-nowrap max-w-34 truncate"
                >
                  {application.company}
                </td>
                <td
                  title={application.position}
                  className="px-4 py-4 text-muted-foreground max-w-32 truncate"
                >
                  {application.position}
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getStatusClasses(
                      application.status,
                    )}`}
                  >
                    {application.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-muted-foreground whitespace-nowrap">
                  {application.dateApplied}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AppDashTable;
