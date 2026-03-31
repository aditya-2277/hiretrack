import {
  MdCalendarMonth,
  MdCelebration,
  MdHeartBroken,
  MdSend,
} from "react-icons/md";

export const cardData = [
  {
    title: "TOTAL APPLIED",
    num_metric: "69",
    trend: "12%",
    trend_icon: "trending_up",
    card_desc: "Applications submitted in the last 30 days",
    card_icon: MdSend,
    card_icon_color: "text-primary/10 group-hover:text-primary/30",
  },
  {
    title: "TOTAL REJECTIONS",
    num_metric: "10",
    trend: "15%",
    trend_icon: "trending_up",
    card_desc: "Applications rejected in the last 30 days",
    card_icon: MdHeartBroken,
    card_icon_color: "text-red-500/10 group-hover:text-red-500/30",
  },
  {
    title: "SCHEDULED INTERVIEWS",
    num_metric: "0",
    trend: "0%",
    trend_icon: "trending_flat",
    card_desc: "Upcoming interviews",
    card_icon: MdCalendarMonth,
    card_icon_color: "text-orange-300/10 group-hover:text-orange-300/30",
  },
  {
    title: "OFFERS RECEIVED",
    num_metric: "0",
    trend: "-100%",
    trend_icon: "trending_down",
    card_desc: "Offers accepted or pending review",
    card_icon: MdCelebration,
    card_icon_color: "text-green-300/10 group-hover:text-green-300/30",
  },
] as const;

export const applications = [
  {
    company: "Apple",
    position: "Frontend Developer",
    status: "Applied",
    dateApplied: "1st March, 2026",
  },
  {
    company: "Microsoft",
    position: "Software Engineer",
    status: "Interview",
    dateApplied: "3rd March, 2026",
  },
  {
    company: "Stripe",
    position: "Product Analyst",
    status: "Rejected",
    dateApplied: "5th March, 2026",
  },
  {
    company: "HubSpot",
    position: "Business Analyst",
    status: "Offer",
    dateApplied: "8th March, 2026",
  },
] as const;

export const allInterviews = [
  {
    company: "Apple",
    position: "Frontend Developer",
    type: "Full-Time",
    interviewDate: "1st March, 2026",
  },
  {
    company: "Microsoft",
    position: "Software Engineer",
    type: "Full-Time",
    interviewDate: "3rd March, 2026",
  },
  {
    company: "Stripe",
    position: "Product Analyst",
    type: "Part-Time",
    interviewDate: "5th March, 2026",
  },
  {
    company: "HubSpot",
    position: "Business Analyst",
    type: "Full-Time",
    interviewDate: "8th March, 2026",
  },
] as const;
