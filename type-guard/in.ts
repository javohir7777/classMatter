function calculateArea(shape: Circle | Rectangle): number {
  if ("radius" in shape) {
    // Type guard using "in" operator for Circle
    return Math.PI * shape.radius * shape.radius;
  } else {
    // Type guard assuming it's Rectangle
    return shape.width * shape.height;
  }
}

interface Circle {
  radius: number;
}

interface Rectangle {
  width: number;
  height: number;
}

const circle: Circle = { radius: 5 };
const rectangle: Rectangle = { width: 4, height: 6 };

const circleArea = calculateArea(circle);
const rectangleArea = calculateArea(rectangle);

console.log(`Circle area: ${circleArea}`); // Output: Circle area: 78.53981633974483
console.log(`Rectangle area: ${rectangleArea}`); // Output: Rectangle area: 24
