export const getClients = async () => {
  const resp = await fetch(import.meta.env.VITE_API_URL);
  const res = await resp.json();
  return res;
};

export const getClientById = async (id) => {
  const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const res = await resp.json();
  return res;
};

export const addClient = async (data) => {
  try {
    const resp = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await resp.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateClient = async (data, id) => {
  try {
    const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await resp.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteClient = async (id) => {
  try {
    const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE",
    });
    await resp.json();
  } catch (error) {
    console.log(error);
  }
};
