export default async function getInformations(name: string) {
  try {
    const URL = `${import.meta.env.VITE_BASE_URL}${name}`;
    const response = await fetch(URL, {
      method: "GET",
    });
    if (!response) {
      throw { message: "informations dont exists" };
    }
    return response.json();
  } catch (error) {
    return error;
  }
}
