export const API_URL = "http://localhost:1337/api/";

export const getMenu = async () => {
  try {
    const response = await fetch(
      `${API_URL}menus?populate=image`
    ); // agregué el populate para poder traer imágenes (el campo image de la colección)
    return await response.json();
  } catch (error) {
    return error;
  }
};
