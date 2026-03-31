import { testimonials } from "../../data/marketing";
import TestimonialCard from "./TestimonialCard";
function Testimonials() {
  return (
    <section id="testimonials" className="min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 py-20">
        <h2 className="text-4xl font-bold">Loved by focused job seekers</h2>
        <p className="mt-4 max-w-2xl text-center text-lg">
          A few examples of how{" "}
          <span className="hover:text-xl">
            <span className="font-bold">Hire</span>
            <span className="text-primary font-bold">Track</span>
          </span>{" "}
          helps candidates stay organized, prepared, and consistent from first
          application to final offer.
        </p>
        <div className="mt-10 grid w-full max-w-6xl gap-8 md:grid-cols-3 xl:px-20">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
