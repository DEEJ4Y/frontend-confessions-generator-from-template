export default function downloadConfession(fileName) {
  let canvas = document.getElementById("confession-renderer");
  let link = document.createElement("a");
  link.download = `${fileName}.png`;
  link.href = canvas.toDataURL();
  link.click();
}
