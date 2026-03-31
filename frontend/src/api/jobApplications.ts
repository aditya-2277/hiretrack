import { JOB_APPLICATIONS_ENDPOINT } from "../config/env";
import type {
  JobApplication,
  JobApplicationInput,
} from "../types/jobApplication";

async function parseResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export async function getJobApplications() {
  const response = await fetch(JOB_APPLICATIONS_ENDPOINT);
  return parseResponse<JobApplication[]>(response);
}

export async function createJobApplication(payload: JobApplicationInput) {
  const response = await fetch(JOB_APPLICATIONS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return parseResponse<JobApplication>(response);
}

export async function deleteJobApplication(id: string) {
  const response = await fetch(`${JOB_APPLICATIONS_ENDPOINT}/${id}`, {
    method: "DELETE",
  });

  await parseResponse<void>(response);
}
