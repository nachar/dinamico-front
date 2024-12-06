export const API_URL = 'http://localhost:1337/api/';

export const getMenu = async () => {
  try {
    const response = await fetch(`${API_URL}menus`);
    return await response.json();
  } catch (error) {
    return error;
  }
};
