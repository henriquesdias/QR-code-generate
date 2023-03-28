import { FormEvent, useState } from "react";

import { Input } from "../styles/Input";
import { Form } from "../styles/Form";
import postInformations from "../api/postInformations";
import { generateCanvas } from "../utils";

export default function MainPage() {
  const [form, setForm] = useState({
    name: "",
    linkedinUrl: "",
    githubUrl: "",
  });
  const [error, setError] = useState<null | string>(null);
  function submitData(event: FormEvent) {
    event.preventDefault();
    const regex = new RegExp(
      /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/
    );
    if (!regex.test(form.githubUrl) || !regex.test(form.linkedinUrl)) {
      setError("The fields linkedin and github must be links");
      return;
    }
    setError(null);
    postInformations(form)
      .catch(() => setError("This name already in use"))
      .then((res) => {
        if (res) {
          generateCanvas(res.name);
        }
      });
  }

  return (
    <Form onSubmit={submitData}>
      <h1>QR Code Image Generator</h1>
      <p style={{ color: "red", marginBottom: "10px" }}>{error ? error : ""}</p>
      <Input>
        <div>Name</div>
        <input
          type="text"
          name="name"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
      </Input>
      <Input>
        <div>LinkedIn</div>
        <input
          type="text"
          name="linkedinUrl"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
      </Input>
      <Input>
        <div>Github</div>
        <input
          type="text"
          name="githubUrl"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
      </Input>
      <button type="submit">Generate Image</button>
    </Form>
  );
}
