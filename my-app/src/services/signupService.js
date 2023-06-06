export const loginService = async (authData) =>
  await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify(authData),
  });
