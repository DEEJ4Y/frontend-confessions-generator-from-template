export default function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var cars = text.split("\n");
  var yOriginal = y;

  for (var ii = 0; ii < cars.length; ii++) {
    var line = "";
    var words = cars[ii].split(" ");

    for (var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + " ";
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;

      if (testWidth > maxWidth) {
        context.fillText(line, x, y);
        line = words[n] + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }

    context.fillText(line, x, y);
    y += lineHeight;
  }
  let textHeight = y - yOriginal;
  let startPoint = (1080 - textHeight + 1.5 * lineHeight) / 2 - lineHeight / 2;
  return startPoint;
}
