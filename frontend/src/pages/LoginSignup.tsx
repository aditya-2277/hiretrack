import LoginCard from "../components/Auth/LoginCard";
import LoginHero from "../components/Auth/LoginHero";
import { useState } from "react";
import SignUpCard from "../components/Auth/SignUpCard";

function LoginSignup() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  return (
    <section className="flex items-center px-4">
      <LoginHero />
      {mode === "login" ? (
        <LoginCard onSwitchToSignUp={() => setMode("signup")} />
      ) : (
        <SignUpCard onSwitchToSignIn={() => setMode("login")} />
      )}
    </section>
  );
}

export default LoginSignup;
