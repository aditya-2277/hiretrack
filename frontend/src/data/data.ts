import {
  MdSend,
  MdCalendarMonth,
  MdCelebration,
  MdHeartBroken,
} from "react-icons/md";

export const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  // { href: "#demo", label: "Demo" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
];

export const plans = [
  {
    plan: "Free Plan",
    monthlyPrice: 0,
    yearlyPrice: 0,
    ctaLabel: "Get Started",
    features: [
      "Up to 10 active applications",
      "Basic Kanban board",
      "Standard interview prep templates",
    ],
  },
  {
    plan: "Pro Plan",
    monthlyPrice: 12,
    yearlyPrice: 100,
    ctaLabel: "Upgrade to Pro",
    features: [
      "Unlimited job applications",
      "Advanced analytics & insights",
      "Email & Calendar synchronization",
      "AI-driven resume keyword analysis",
    ],
    isPopular: true,
  },
] as const;

export const testimonials = [
  {
    quote:
      "HireTrack gave me a clear system for every application. I stopped missing follow-ups, and my interview pipeline finally felt manageable.",
    name: "MC Stan",
    role: "Mumble Developer",
    company: "Hindi Records",
  },
  {
    quote:
      "I used HireTrack to prep for interviews and track notes after each round. Having everything in one place made me sound sharper and more prepared.",
    name: "Emiway Bunty",
    role: "Assistant to $ Sign",
    company: "$ 1 Time",
  },
  {
    quote:
      "What used to feel chaotic now feels structured. HireTrack turned my job hunt into a process I could actually improve week over week.",
    name: "Aditya Patil",
    role: "Junior Software Engineer",
    company: "Google",
  },
] as const;

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
];

export const featureCards = [
  {
    title: "Visual Pipeline",
    description:
      "Track your progress from application to offer with a customizable kanban-style board. Drag and drop your way to success.",
    material_logo: "conversion_path",
  },
  {
    title: "Interview Prep",
    description:
      "Store company research, practice questions, and specific notes for every interview in one organized location.",
    material_logo: "dictionary",
  },
  {
    title: "Smart Reminders",
    description:
      "Never miss a follow-up or a scheduled interview with automated alerts and calendar integrations.",
    material_logo: "alarm",
  },
];

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
];

export const allApplications = [
  {
    company: "Apple",
    position: "Frontend Developer",
    status: "Applied",
    dateApplied: "1st March, 2026",
    type: "Full-Time",
  },
  {
    company: "Microsoft",
    position: "Software Engineer",
    status: "Interview",
    dateApplied: "3rd March, 2026",
    type: "Full-Time",
  },
  {
    company: "Stripe",
    position: "Product Analyst",
    status: "Rejected",
    dateApplied: "5th March, 2026",
    type: "Part-Time",
  },
  {
    company: "HubSpot",
    position: "Business Analyst",
    status: "Offer",
    dateApplied: "8th March, 2026",
    type: "Full-Time",
  },
];
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
];
