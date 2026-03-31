import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export type AppUser = {
  name: string;
  email: string;
  role: string;
};

type AuthContextValue = {
  currentUser: AppUser | null;
  setCurrentUser: (user: AppUser | null) => void;
};

const STORAGE_KEY = "hiretrack.currentUser";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const guestUser: AppUser = {
  name: "Guest User",
  email: "",
  role: "Member",
};

function isAppUser(value: unknown): value is AppUser {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<AppUser>;
  return (
    typeof candidate.name === "string" &&
    typeof candidate.email === "string" &&
    typeof candidate.role === "string"
  );
}

function readStoredUser() {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.sessionStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    const parsedValue: unknown = JSON.parse(rawValue);
    return isAppUser(parsedValue) ? parsedValue : null;
  } catch {
    return null;
  }
}

function getStringValue(
  source: Record<string, unknown>,
  keys: readonly string[],
) {
  for (const key of keys) {
    const value = source[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return "";
}

export function getAppUserFromLoginResponse(
  payload: unknown,
  fallbackEmail: string,
): AppUser {
  const source =
    payload && typeof payload === "object"
      ? ((payload as { user?: unknown }).user ?? payload)
      : {};

  const userRecord =
    source && typeof source === "object"
      ? (source as Record<string, unknown>)
      : ({} as Record<string, unknown>);

  const name =
    getStringValue(userRecord, ["name", "fullName", "username", "userName"]) ||
    fallbackEmail;

  const email =
    getStringValue(userRecord, ["email", "Email", "emailAddress"]) ||
    fallbackEmail;

  const role =
    getStringValue(userRecord, ["role", "userRole", "title"]) || "Member";

  return { name, email, role };
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [currentUser, setCurrentUser] = useState<AppUser | null>(
    readStoredUser,
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (currentUser) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser));
      return;
    }

    window.sessionStorage.removeItem(STORAGE_KEY);
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export function getGuestUser() {
  return guestUser;
}
