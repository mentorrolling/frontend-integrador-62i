const url = "https://backend-62i.onrender.com/api/productos";
const token = JSON.parse(localStorage.getItem("token"));

const productosList = async (pagina) => {
  const resp = await fetch(url + "?desde=" + pagina, {
    method: "GET",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await resp.json();
  return data;
};

const productoGet = async (id) => {
  const resp = await fetch(url + "/" + id, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await resp.json();
  return data;
};

const productosAdd = async (datos) => {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });
  const data = await resp.json();
  return data;
};

const productosUpdate = async (id, datos) => {
  const resp = await fetch(url + "/" + id, {
    method: "PUT",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });
  const data = await resp.json();
  return data;
};

const productosDelete = async (id) => {
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

export {
  productosList,
  productosAdd,
  productosUpdate,
  productosDelete,
  productoGet,
};
