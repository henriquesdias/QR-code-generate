export function generateCanvas(name: string) {
  const canvas = document.createElement("canvas");
  const context = canvas?.getContext("2d");
  if (canvas && context) {
    canvas.width = 600;
    canvas.height = 800;

    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, 600, 800);

    context.fillStyle = "#000000";
    context.font = "30px Arial";
    context.fillText(`Nome: ${name}`, 170, 100);
    context.fillText("Scan Me", 210, 150);
    const url = window.location.href;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?data=${url}${name}&size=200x200`;
    img.onload = () => {
      context?.drawImage(img, 175, 200, 200, 200);
      const link = document.createElement("a");
      link.download = "my-info.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
  }
}
