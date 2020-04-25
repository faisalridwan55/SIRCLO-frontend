type ShipType = "motorboats" | "sailboats" | "cruises";

type ShipProps = {
  name: string;
  type: ShipType;
};

type MotorboatsProps = Omit<ShipProps, "type"> & { numberOfEngine: number };

abstract class Ship {
  constructor(
    private name: ShipProps["name"],
    private type: ShipProps["type"]
  ) {}

  getInformation = (): void =>
    console.log(`Name: ${this.name} - Type: ${this.type}`);

  abstract getSpeed(): void;
}

class Motorboats extends Ship {
  static engineSpeed = 120;

  constructor(
    name: MotorboatsProps["name"],
    private numberOfEngine: MotorboatsProps["numberOfEngine"]
  ) {
    super(name, "motorboats");
  }

  setNumberOfEngine = (num: MotorboatsProps["numberOfEngine"]): void => {
    this.numberOfEngine = num;
  };

  getSpeed = (): void => {
    const speed = Motorboats.engineSpeed * this.numberOfEngine;
    console.log(`Speed of this ship is ${speed} km/h`);
  };
}

// Test for Motorboats class
const motorboats: Motorboats = new Motorboats("Motorboats A", 2);
motorboats.getInformation();
motorboats.getSpeed();
motorboats.setNumberOfEngine(3);
motorboats.getSpeed();
