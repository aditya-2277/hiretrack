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
        <div className="relative my-2 flex border border-gray-500 rounded-full">
          <div
            className={`absolute rounded-full bg-primary min-w-24 h-full transition-transform duration-300 ease-in-out ${isMonthly ? "" : "translate-x-full"}`}
          ></div>
          <div className="z-10 rounded-full min-w-24 text-center">
            <button
              type="button"
              onClick={() => setIsMonthly(true)}
              className={`rounded-full p-2 w-full`}
            >
              Monthly
            </button>
          </div>
          <div className={`rounded-full min-w-24 text-center z-10`}>
            <button
              type="button"
              onClick={() => setIsMonthly(false)}
              className={`rounded-full p-2 w-full`}
            >
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
