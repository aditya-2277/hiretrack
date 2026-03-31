const defaultApiBaseUrl = "https://localhost:7057";

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") ?? defaultApiBaseUrl;

export const JOB_APPLICATIONS_ENDPOINT = `${API_BASE_URL}/api/jobapplications`;
