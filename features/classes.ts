class Vehicle {
  constructor(public color: string) { }

  drive(): void {
    console.log('driving...');
  }

  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log('vroom');
  }
}

const vehicle = new Vehicle('red');
vehicle.drive();

const theCar = new Car(4, 'orange');
theCar.drive();
theCar.honk();
