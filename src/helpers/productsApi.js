const url = "https://backend-62i.onrender.com/api/productos";
const token = JSON.parse(localStorage.getItem("token")) || null;

const productsList = async () => {
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
};

const productAdd = async (data) => {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });

  const data = await resp.json();

  return data;
};

const productUpdate = async (id, data) => {
  const resp = await fetch(url + "/" + id, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });
  const data = await resp.json();
  return data;
};

const productDelete = async (id) => {
  const resp = await fetch(url + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });
  const data = await resp.json();
  return data;
};

export { productsList, productAdd, productUpdate, productDelete };