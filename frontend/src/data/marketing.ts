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
] as const;
