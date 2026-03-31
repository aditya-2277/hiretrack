import {
  MdCalendarMonth,
  MdNewspaper,
  MdOutlineAnalytics,
  MdOutlineDashboard,
  MdSettings,
} from "react-icons/md";
import { APP_ROUTES } from "./routes";

export const marketingLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
] as const;

export const appNavigation = [
  { to: APP_ROUTES.root, label: "Dashboard", icon: MdOutlineDashboard, end: true },
  { to: APP_ROUTES.applications, label: "Applications", icon: MdNewspaper },
  { to: APP_ROUTES.interviews, label: "Interviews", icon: MdCalendarMonth },
  { to: APP_ROUTES.insights, label: "Insights", icon: MdOutlineAnalytics },
  { to: APP_ROUTES.settings, label: "Settings", icon: MdSettings },
] as const;
