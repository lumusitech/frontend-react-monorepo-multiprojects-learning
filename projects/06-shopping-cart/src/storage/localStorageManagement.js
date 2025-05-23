export const saveToLocalStorage = (key = "cart", value = {}) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key = "cart") => {
  try {
    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : [];
  } catch (error) {
    console.error({ error: "invalid localStorage", details: error });
    localStorage.removeItem(key);
    return [];
  }
};
