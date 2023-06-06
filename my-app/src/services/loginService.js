export const loginService = async (authData) =>
  await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ ...authData }),
  });
