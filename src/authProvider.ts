import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    localStorage.setItem("email", username);
    const req = new Request(`${import.meta.env.VITE_SERVER_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(req)
      .then((res) => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((res) => {
        localStorage.setItem("token", res.token);
      });
  },
  logout: () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      return Promise.reject({ redirectTo: "/login", logoutUser: false });
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};
