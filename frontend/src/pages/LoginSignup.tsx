import LoginCard from "../components/Landing/LoginCard";
import LoginHero from "../components/Landing/LoginHero";
import { useState } from "react";
import SignUpCard from "../components/Landing/SignUpCard";

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
