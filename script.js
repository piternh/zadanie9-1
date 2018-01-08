
function getTriangleArea (a, h) {

  if (a <= 0 || h <= 0) {
      return "Nieprawidłowe dane";
  }

  if (a > 0 && h > 0) {
      return a*h/2;
  }
}
console.log(getTriangleArea(15, 8));

var triangle1area = getTriangleArea(8, 8);

var triangle2area = getTriangleArea(12, 10);

var triangle3area = getTriangleArea(24, 15);
