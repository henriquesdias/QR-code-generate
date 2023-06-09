type Informations = {
  name: string;
  linkedinUrl: string;
  githubUrl: string;
};

export default async function postInformations({
  name,
  linkedinUrl,
  githubUrl,
}: Informations) {
  try {
    const URL = import.meta.env.VITE_BASE_URL;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ name, linkedinUrl, githubUrl }),
    });
    if (!response.ok) {
      throw new Error("This name already in use");
    }

    return response.json();
  } catch (error) {
    throw new Error("This name already in use");
  }
}
