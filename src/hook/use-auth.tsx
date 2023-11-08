import { create } from "zustand";
import cookies from "js-cookie";
type Authstate = {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: "USER" | "ADMIN";
};

type AuthActions = {
  user: Authstate;
  token: string;
  setToken: (token: string) => void;
  setUser: (user: Authstate) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  verifyToken: () => void;
  load: () => void;
};
async function login(email: string, password: string) {
  const res = await fetch("process.env.NEXT_PUBLIC_API_HOST/api/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
}
async function getuser(token: string) {
  const res = await fetch("process.env.NEXT_PUBLIC_API_HOST/api/users", {
    headers: {
      authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
}

const useAuth = create<AuthActions>((set) => ({
  user: {} as Authstate,
  token: "",
  setToken: (token) => set({ token }),
  setUser: (user) => set({ user }),
  login: async (email, p) => {
    const loginResponse = await login(email, p);
    if (loginResponse.token) {
      const userResponse = await getuser(loginResponse.token);
      const { id, createAt, updateAt, ...user } = userResponse;
      localStorage.setItem("user", JSON.stringify(user));
      cookies.set("token", loginResponse.token, { expires: 1 });
      set({ user: user, token: loginResponse.token });
    }
  },
  logout: () => {
    cookies.remove("token");
    localStorage.removeItem("user");
    set({ user: {} as Authstate, token: undefined });
  },
  verifyToken: async () => {
    const res = await fetch(
      "process.env.NEXT_PUBLIC_API_HOST/api/verify-token",
      {
        method: "POST",
        headers: {
          authorization: "Bearer " + cookies.get("token"),
        },
      }
    );
    if (res.status === 401) {
      cookies.remove("token");
      localStorage.removeItem("user");
      set({ user: {} as Authstate, token: undefined });
    }
  },
  load: async () => {
    const token = cookies.get("token");
    if (token) {
      const user = await getuser(token);
      const { id, createAt, updateAt, ...rest } = user;
      localStorage.setItem("user", JSON.stringify(rest));
      set({ user: rest });
    }
  },
}));

export default useAuth;
