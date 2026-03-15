import { MdSend } from "react-icons/md";

function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 py-2">
      <div className="relative flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 shadow-sm  overflow-hidden group">
        <div className="absolute top-0 right-4 p-2 text-primary/10 group-hover:text-primary/20 transition-colors">
          <span className="text-6xl">
            <MdSend />
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">
          Total Applied
        </p>
        <div className="flex items-end gap-3">
          <p className="text-slate-900 dark:text-slate-100 text-4xl font-black">
            128
          </p>
          <span className="bg-emerald-500/10 text-emerald-500 text-xs font-bold px-2 py-1 rounded-full flex items-center mb-1">
            <span className="material-symbols-outlined text-sm">
              trending_up
            </span>
            12%
          </span>
        </div>
        <p className="text-slate-400 dark:text-slate-500 text-xs">
          Applications submitted in last 30 days
        </p>
      </div>
      <div className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 text-amber-500/10 group-hover:text-amber-500/20 transition-colors">
          <span className="material-symbols-outlined text-6xl">
            event_available
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">
          Scheduled Interviews
        </p>
        <div className="flex items-end gap-3">
          <p className="text-slate-900 dark:text-slate-100 text-4xl font-black">
            14
          </p>
          <span className="bg-emerald-500/10 text-emerald-500 text-xs font-bold px-2 py-1 rounded-full flex items-center mb-1">
            <span className="material-symbols-outlined text-sm">
              trending_up
            </span>
            5%
          </span>
        </div>
        <p className="text-slate-400 dark:text-slate-500 text-xs">
          Upcoming across all companies
        </p>
      </div>
      <div className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors">
          <span className="material-symbols-outlined text-6xl">
            military_tech
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">
          Offers Received
        </p>
        <div className="flex items-end gap-3">
          <p className="text-slate-900 dark:text-slate-100 text-4xl font-black">
            3
          </p>
          <span className="bg-emerald-500/10 text-emerald-500 text-xs font-bold px-2 py-1 rounded-full flex items-center mb-1">
            <span className="material-symbols-outlined text-sm">
              trending_up
            </span>
            1%
          </span>
        </div>
        <p className="text-slate-400 dark:text-slate-500 text-xs">
          Pending review or accepted
        </p>
      </div>
    </div>
  );
}

export default DashboardCards;
