class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

class Bicycle {
  type: string;

  constructor(type: string) {
    this.type = type;
  }
}

function printVehicleInfo(vehicle: Car | Bicycle) {
  if (vehicle instanceof Car) {
    console.log(`This is a car of brand: ${vehicle.brand}`);
  } else if (vehicle instanceof Bicycle) {
    console.log(`This is a bicycle of type: ${vehicle.type}`);
  } else {
    console.log("Unsupported vehicle type.");
  }
}

const car = new Car("Toyota");
const bicycle = new Bicycle("Mountain");

printVehicleInfo(car); // Output: This is a car of brand: Toyota
printVehicleInfo(bicycle); // Output: This is a bicycle of type: Mountain
