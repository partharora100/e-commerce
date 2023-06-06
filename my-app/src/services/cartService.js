export const getCart = async (token) =>
  await fetch("/api/user/cart", {
    method: "POST",
    headers: {
      authorization: token,
    },
  });

export const deleteCart = async () => {};

export const updateCart = async () => {};
