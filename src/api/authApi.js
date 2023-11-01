const url = "https://backend-62i.onrender.com/api/auth/login";

export const login = async (datos) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const info = await res.json();

  return info;
};
