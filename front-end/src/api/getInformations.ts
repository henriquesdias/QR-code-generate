export default async function getInformations(name: string) {
  try {
    const URL = `${import.meta.env.VITE_BASE_URL}${name}`;
    const response = await fetch(URL, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("User not found");
    }
    return response.json();
  } catch (error) {
    throw new Error("User not found");
  }
}
