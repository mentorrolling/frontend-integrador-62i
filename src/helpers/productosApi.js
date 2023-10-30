const url = "https://backend-62i.onrender.com/api/productos";

const productosList = async () => {
  const resp = await fetch(url, {
    method: "GET",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
};

export { productosList };
