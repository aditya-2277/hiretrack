export type NavbarProps = {
  variant: "landing" | "auth" | "app";
};

export type PricingCardProps = {
  plan: string;
  monthlyPrice: number;
  yearlyPrice: number;
  ctaLabel: string;
  features: readonly string[];
  isPopular?: boolean;
  isMonthly: boolean;
};

export type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
};
