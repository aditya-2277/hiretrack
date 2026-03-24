import PricingCard from "./PricingCard";
import { plans } from "../../data/data";
import { useState } from "react";

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section id="pricing" className="min-h-screen flex items-center">
      <div className="container px-6 flex flex-col items-center justify-center mt-10">
        <h2 className="text-3xl font-bold py-2">Choose your subscription</h2>
        <p className="text-lg py-2">We have plans tailored to your needs</p>
        <div className="my-2 flex border border-gray-500 rounded-full">
          <div
            className={`rounded-full p-2 min-w-24 text-center ${isMonthly ? "bg-primary" : "bg-primary/1"}`}
          >
            <button type="button" onClick={() => setIsMonthly(true)}>
              Monthly
            </button>
          </div>
          <div
            className={`rounded-full p-2 min-w-24 text-center ${!isMonthly ? "bg-primary" : "bg-primary/1"}`}
          >
            <button type="button" onClick={() => setIsMonthly(false)}>
              Yearly
            </button>
          </div>
        </div>
        <div className="mt-6 grid w-full max-w-6xl gap-8 px-0 md:grid-cols-2 md:px-12 xl:px-20">
          {plans.map((plan) => (
            <PricingCard key={plan.plan} isMonthly={isMonthly} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
