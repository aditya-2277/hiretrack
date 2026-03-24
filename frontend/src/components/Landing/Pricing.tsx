import PricingCard from "./PricingCard";
import { plans } from "../../data/data";

function Pricing() {
  return (
    <section id="pricing" className="min-h-screen flex items-center">
      <div className="container px-6 flex flex-col items-center justify-center mt-10">
        <h2 className="text-3xl font-bold py-2">Choose your subscription</h2>
        <p className="text-lg py-2">We have plans tailored to your needs</p>
        <div className="my-2 flex border border-gray-500 rounded-full">
          <div className="rounded-full p-2 min-w-24 bg-primary text-center">
            Monthly
          </div>
          <div className="rounded-full p-2 min-w-24 bg-primary/1 text-center">
            Yearly
          </div>
        </div>
        <div className="mt-6 grid w-full max-w-6xl gap-8 px-0 md:grid-cols-2 md:px-12 xl:px-20">
          {plans.map((plan) => (
            <PricingCard key={plan.plan} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
