import { API_URL } from "../utilities/constants.js";

export const getMenu = async () => {
  try {
    const response = await fetch(
      `${API_URL}/api/menus?populate=image`
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};
