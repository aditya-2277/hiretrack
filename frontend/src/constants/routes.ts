export const PUBLIC_ROUTES = {
  home: "/",
  auth: "/auth",
} as const;

export const APP_ROUTES = {
  root: "/app",
  applications: "/app/applications",
  interviews: "/app/interviews",
  insights: "/app/insights",
  settings: "/app/settings",
  applicationsRelative: "applications",
  interviewsRelative: "interviews",
  insightsRelative: "insights",
  settingsRelative: "settings",
} as const;
