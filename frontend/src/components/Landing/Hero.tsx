import dashboard from "../../assets/dashboard.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="" className="flex items-center justify-center">
      <div className="max-w-300 px-6 py-12 md:py-24">
        <div className="flex flex-col gap-10 md:flex-row items-center">
          <div className="flex flex-col gap-8 flex-1 text-left">
            <div className="flex flex-col gap-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                <span className="material-symbols-outlined text-sm">
                  auto_awesome
                </span>{" "}
                Now with AI-powered insights
              </span>
              <h1 className="text-slate-900 dark:text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                Master Your <br className="hidden md:block" />
                <span className="text-primary">Job Hunt</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-135">
                Organize your applications, track your interview progress, and
                land your dream job with the ultimate career companion.
              </p>
            </div>
            <div className="flex flex-col justify-center md:justify-normal sm:flex-row gap-4">
              <Link
                to={"/auth"}
                className="flex min-w-45 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-primary text-white text-base font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/25"
              >
                Get Started Free
              </Link>
              <a
                href="#demo"
                className="flex min-w-45 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 border border-slate-200 dark:border-slate-800 bg-transparent text-slate-900 dark:text-white text-base font-bold transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50"
              >
                View Demo
              </a>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
            <div
              className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-900 aspect-4/3 flex items-center justify-center"
              data-alt="Modern dark dashboard showing job application analytics"
            >
              <img
                src={dashboard}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 from-background-dark/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
