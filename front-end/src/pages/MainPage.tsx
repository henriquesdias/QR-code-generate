import { useState } from "react";

import { Input } from "../styles/Input";
import { Form } from "../styles/Form";

export default function MainPage() {
  const [form, setForm] = useState({
    name: "",
    linkedin: "",
    github: "",
  });

  return (
    <Form>
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
          name="linkedin"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
      </Input>
      <Input>
        <div>Github</div>
        <input
          type="text"
          name="github"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
      </Input>
      <button>Generate Image</button>
    </Form>
  );
}
