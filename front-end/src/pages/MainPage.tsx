import { FormEvent, useState, useEffect } from "react";

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
  function generateCanvas() {
    const canvas = document.querySelector("canvas");
    const context = canvas?.getContext("2d");
    if (canvas && context) {
      canvas.width = 600;
      canvas.height = 800;

      context.fillStyle = "#FFFFFF";
      context.fillRect(0, 0, 600, 800);

      context.fillStyle = "#000000";
      context.font = "30px Arial";
      context.fillText("Nome: Henrique", 170, 100);
      context.fillText("Scan Me", 130, 150);

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src =
        "https://api.qrserver.com/v1/create-qr-code/?data=https://google.com&size=200x200";
      img.onload = () => {
        context?.drawImage(img, 150, 200, 200, 200);
        const link = document.createElement("a");
        link.download = "my-info.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      };
    }
  }
  useEffect(() => {
    // generateCanvas();
  }, []);
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
      <canvas id="canvas"></canvas>
    </Form>
  );
}
