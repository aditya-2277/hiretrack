import { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import type { JobApplication } from "../../types/jobApplication";
import StatusBadge from "../shared/StatusBadge";

type ApplicationsTableProps = {
  applications: JobApplication[];
  deletingId: string | null;
  onDelete: (id: string) => Promise<void>;
};

function ApplicationsTable({
  applications,
  deletingId,
  onDelete,
}: ApplicationsTableProps) {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const toggleMenu = (id: string) => {
    setOpenMenuId((currentId) => (currentId === id ? null : id));
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
                <StatusBadge status={application.status} />
              </td>
              <td className="px-4 py-4 text-muted-foreground whitespace-nowrap">
                {application.dateApplied}
              </td>
              <td className="px-4 py-4 text-muted-foreground whitespace-nowrap">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleMenu(application.id)}
                  >
                    <MdMoreVert className="hover:bg-gray-600 text-2xl rounded-md" />
                  </button>
                  {openMenuId === application.id && (
                    <div className="absolute right-0 top-0 flex min-w-20 flex-col border bg-slate-800 p-1 text-white">
                      <button className="w-full text-left px-1 py-2 hover:bg-slate-700">
                        Edit
                      </button>
                      <button
                        className="w-full text-left px-1 py-2 hover:bg-slate-700"
                        disabled={deletingId === application.id}
                        onClick={async () => {
                          await onDelete(application.id);
                          setOpenMenuId(null);
                        }}
                      >
                        {deletingId === application.id ? "Deleting..." : "Delete"}
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
