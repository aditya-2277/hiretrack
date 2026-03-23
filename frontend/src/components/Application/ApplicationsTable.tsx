import { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import type { JobApplication } from "../../types/jobApplication";

type ApplicationsTableProps = {
  applications: JobApplication[];
  onSuccess: () => Promise<void>;
};

function ApplicationsTable({
  applications,
  onSuccess,
}: ApplicationsTableProps) {
  const [openMenuId, setOpenMenuId] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(
        `https://localhost:7057/api/jobapplications/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to delete application");
      }

      await onSuccess();
      setIsMenuOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-6 rounded-2xl border border-white/10 overflow-visible max-h-screen">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="bg-slate-800 border-b border-white/10 text-muted-foreground">
            <th className="px-4 py-3 font-medium">Company</th>
            <th className="px-4 py-3 font-medium">Position</th>
            <th className="px-4 py-3 font-medium">Type</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Date Applied</th>
            <th className="px-4 py-3 font-medium">Action</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((application) => (
            <tr
              key={`${application.id}`}
              className="border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors"
            >
              <td
                title={application.companyName}
                className="px-4 py-4 font-medium text-foreground whitespace-nowrap max-w-34 truncate"
              >
                {application.companyName}
              </td>
              <td
                title={application.position}
                className="px-4 py-4 text-muted-foreground max-w-32 truncate"
              >
                {application.position}
              </td>
              <td
                title={application.type}
                className="px-4 py-4 text-muted-foreground max-w-32 truncate"
              >
                {application.type}
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
              <td className="px-4 py-4 text-muted-foreground whitespace-nowrap">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setOpenMenuId(application.id);
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    <MdMoreVert className="hover:bg-gray-600 text-2xl rounded-md" />
                  </button>
                  {openMenuId == application.id && (
                    <div
                      className={`absolute right-0 top-0 border bg-slate-800 text-white p-1 min-w-20 ${isMenuOpen ? "flex flex-col" : "hidden"}`}
                    >
                      <button className="w-full text-left px-1 py-2 hover:bg-slate-700">
                        Edit
                      </button>
                      <button
                        className="w-full text-left px-1 py-2 hover:bg-slate-700"
                        onClick={() => handleDelete(application.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationsTable;
