import { useCallback, useEffect, useState } from "react";
import {
  createJobApplication,
  deleteJobApplication,
  getJobApplications,
} from "../api/jobApplications";
import type { JobApplication, JobApplicationInput } from "../types/jobApplication";

export function useJobApplications() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  const refresh = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const data = await getJobApplications();
      setApplications(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const addApplication = useCallback(
    async (payload: JobApplicationInput) => {
      setIsSubmitting(true);
      setError("");

      try {
        await createJobApplication(payload);
        await refresh();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to create application",
        );
        throw err;
      } finally {
        setIsSubmitting(false);
      }
    },
    [refresh],
  );

  const removeApplication = useCallback(
    async (id: string) => {
      setDeletingId(id);
      setError("");

      try {
        await deleteJobApplication(id);
        await refresh();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to delete application",
        );
        throw err;
      } finally {
        setDeletingId(null);
      }
    },
    [refresh],
  );

  return {
    applications,
    isLoading,
    isSubmitting,
    deletingId,
    error,
    refresh,
    addApplication,
    removeApplication,
  };
}
