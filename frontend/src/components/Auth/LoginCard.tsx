import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_USER_ENDPOINT } from "../../config/env";
import { GoogleIcon, MailIcon, LockIcon } from "../../constants/icons";
import { useAuth, getAppUserFromLoginResponse } from "../../auth/session";
import { APP_ROUTES } from "../../constants/routes";

type LoginCardProps = {
  onSwitchToSignUp: () => void;
};

function LoginCard({ onSwitchToSignUp }: LoginCardProps) {
  const [emailAdd, setEmailAdd] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const { setCurrentUser } = useAuth();

  const handleLogin = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const res = await fetch(`${AUTH_USER_ENDPOINT}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: emailAdd,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || "Login Error Occured!");
        return;
      }

      setCurrentUser(getAppUserFromLoginResponse(data, emailAdd));
      setEmailAdd("");
      setPassword("");
      navigate(APP_ROUTES.root);
    } catch {
      setErrorMsg({ errorMsg } + " Login Error occured!");
    }
  };

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
        {errorMsg && (
          <p className="text-lg font-bold text-red-600">{errorMsg}</p>
        )}
        <div className="my-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-sky-100/35">
          <span className="h-px flex-1 bg-white/8" />
          Or continue with email
          <span className="h-px flex-1 bg-white/8" />
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
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
                onChange={(e) => setEmailAdd(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
