import { MdMoreVert } from "react-icons/md";
import { allInterviews } from "../data/data";
function InterviewsTable() {
  return (
    <div className="mt-6 rounded-2xl border border-white/10 overflow-hidden">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="bg-slate-800 border-b border-white/10 text-muted-foreground">
            <th className="px-4 py-3 font-medium">Company</th>
            <th className="px-4 py-3 font-medium">Position</th>
            <th className="px-4 py-3 font-medium">Type</th>
            <th className="px-4 py-3 font-medium">Questions</th>
            <th className="px-4 py-3 font-medium">Interview Date</th>
            <th className="px-4 py-3 font-medium">Action</th>
          </tr>
        </thead>

        <tbody>
          {allInterviews.map((interview) => (
            <tr
              key={`${interview.company}-${interview.position}`}
              className="border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors"
            >
              <td
                title={interview.company}
                className="px-4 py-4 font-medium text-foreground whitespace-nowrap max-w-34 truncate"
              >
                {interview.company}
              </td>
              <td
                title={interview.position}
                className="px-4 py-4 text-muted-foreground max-w-32 truncate"
              >
                {interview.position}
              </td>
              <td
                title={interview.type}
                className="px-4 py-4 text-muted-foreground max-w-32 truncate"
              >
                {interview.type}
              </td>
              <td className="px-4 py-4">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium underline cursor-pointer`}
                >
                  View
                </span>
              </td>
              <td className="px-4 py-4 text-muted-foreground whitespace-nowrap">
                {interview.interviewDate}
              </td>
              <td className="px-4 py-4 text-muted-foreground whitespace-nowrap">
                <MdMoreVert className="hover:bg-gray-600 text-2xl rounded-md" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InterviewsTable;
