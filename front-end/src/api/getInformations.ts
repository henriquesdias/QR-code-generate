export default async function getInformations(name: string) {
  try {
    const URL = `http://localhost:4001/${name}`;
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
