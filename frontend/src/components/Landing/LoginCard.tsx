function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 text-muted-foreground"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 8 8 6 8-6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 text-muted-foreground"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.2 1.3-1.5 3.9-5.5 3.9-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.5 14.6 2.5 12 2.5A9.5 9.5 0 1 0 12 21.5c5.5 0 9.1-3.8 9.1-9.2 0-.6-.1-1.1-.2-1.6H12Z"
      />
      <path
        fill="#34A853"
        d="M3.6 7.4 6.8 9.8C7.7 7.5 9.6 6 12 6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.5 14.6 2.5 12 2.5c-3.6 0-6.7 2-8.4 4.9Z"
      />
      <path
        fill="#FBBC05"
        d="M12 21.5c2.5 0 4.6-.8 6.1-2.3l-2.8-2.3c-.8.5-1.9.9-3.3.9-3.9 0-5.3-2.6-5.5-3.8l-3.2 2.5c1.6 3 4.8 5 8.7 5Z"
      />
      <path
        fill="#4285F4"
        d="M20.9 10.7H12v3.4h5.1c-.3 1.3-1.4 2.3-1.9 2.8l2.8 2.3c1.8-1.7 3-4.2 3-7.7 0-.6-.1-1.1-.1-1.5Z"
      />
    </svg>
  );
}

type LoginCardProps = {
  onSwitchToSignUp: () => void;
};

function LoginCard({ onSwitchToSignUp }: LoginCardProps) {
  return (
    <section className="flex justify-center w-md m-auto">
      <div className="w-full rounded-2xl border border-white/8 bg-surface/90 sm:p-8">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          Welcome Back
        </h2>
        <p className="mt-2 text-sm text-sky-100/60">
          Please enter your details to sign in.
        </p>

        <button
          type="button"
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl border border-white/6 bg-secondary/90 px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        <div className="my-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-sky-100/35">
          <span className="h-px flex-1 bg-white/8" />
          Or continue with email
          <span className="h-px flex-1 bg-white/8" />
        </div>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Email Address
            </label>
            <div className="flex items-center gap-3 rounded-xl border border-primary/12 bg-background/80 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
              <MailIcon />
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between gap-4">
              <label
                htmlFor="password"
                className="text-sm font-medium text-foreground"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs font-medium text-primary transition hover:text-blue-300"
              >
                Forgot password?
              </a>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-primary/12 bg-background/80 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
              <LockIcon />
              <input
                id="password"
                type="password"
                placeholder="********"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <label className="flex items-center gap-3 text-sm text-sky-100/60">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border border-white/12 bg-background accent-primary"
            />
            Remember me for 30 days
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-primary/70 shadow-md transition hover:bg-blue-500"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-sky-100/55">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToSignUp}
            className="font-medium text-primary hover:text-blue-300"
          >
            Sign up for free
          </button>
        </p>
      </div>
    </section>
  );
}

export default LoginCard;
