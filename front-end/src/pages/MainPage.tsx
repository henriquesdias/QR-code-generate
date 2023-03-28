import { FormEvent, useState } from "react";

import { Input } from "../styles/Input";
import { Form } from "../styles/Form";
import postInformations from "../api/postInformations";

export default function MainPage() {
  const [form, setForm] = useState({
    name: "",
    linkedinUrl: "",
    githubUrl: "",
  });
  function submitData(event: FormEvent) {
    event.preventDefault();
    postInformations(form)
      .catch((res) => console.log(res))
      .then((res) => console.log(res));
  }
  return (
    <Form onSubmit={submitData}>
      <h1>QR Code Image Generator</h1>
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
