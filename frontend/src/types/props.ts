export type NavbarProps = {
  variant: "landing" | "auth" | "app";
};

export type PricingCardProps = {
  plan: string;
  price: number;
  ctaLabel: string;
  features: readonly string[];
  isPopular?: boolean;
};

export type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
};
