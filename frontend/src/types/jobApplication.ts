export type JobApplication = {
  id: string;
  companyName: string;
  position: string;
  type: string;
  status: string;
  dateApplied: string;
};

export type JobApplicationInput = Omit<JobApplication, "id">;
