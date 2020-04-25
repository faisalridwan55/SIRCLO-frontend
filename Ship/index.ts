type ShipType = "motorboats" | "sailboats" | "cruises";

// Ship class implementation
type ShipProps = {
  name: string;
  type: ShipType;
};

abstract class Ship {
  constructor(
    // Use constructor shorthand
    private name: ShipProps["name"],
    private type: ShipProps["type"]
  ) {}

  getInformation = (): void =>
    console.log(`Name: ${this.name} - Type: ${this.type}`);

  abstract getSpeed(): void;
}

// Motorboats class implementation
type MotorboatsProps = Omit<ShipProps, "type"> & { numberOfEngine: number };

class Motorboats extends Ship {
  static engineSpeed = 120;

  // Use constructor shorthand
  constructor(
    name: MotorboatsProps["name"],
    private numberOfEngine: MotorboatsProps["numberOfEngine"]
  ) {
    super(name, "motorboats");
  }

  private countSpeed = (): number =>
    Motorboats.engineSpeed * this.numberOfEngine;

  setNumberOfEngine = (num: MotorboatsProps["numberOfEngine"]): void => {
    console.log(`Change engine from ${this.numberOfEngine} to ${num}`);
    this.numberOfEngine = num;
  };

  getSpeed = (): void =>
    console.log(`Speed of this ship is ${this.countSpeed()} km/h`);
}

// Sailboats class implementation
type Engine = { name: string; speed: number };

type SailboatsProps = Omit<ShipProps, "type"> & {
  numberOfSail: number;
  additionalEngines?: Engine[];
};

class Sailboats extends Ship {
  static defaultSpeed = 80;
  private numberOfSail: SailboatsProps["numberOfSail"];
  private additionalEngines: SailboatsProps["additionalEngines"];

  // Use object param for more than two params
  constructor({ name, numberOfSail, additionalEngines }: SailboatsProps) {
    super(name, "sailboats");
    this.numberOfSail = numberOfSail;
    this.additionalEngines = additionalEngines;
  }

  private speedOfSail = (): number =>
    Sailboats.defaultSpeed * this.numberOfSail;

  private countSpeed = (): {
    sailSpeed: number;
    totalSpeed: number;
    engineSpeed: number;
  } => {
    const engineSpeed =
      this.additionalEngines
        ? this.additionalEngines.reduce(
            (totalSpeed, engine) => totalSpeed + engine.speed,
            0
          )
        : 0;
    const sailSpeed = this.speedOfSail();
    return { totalSpeed: sailSpeed + engineSpeed, sailSpeed, engineSpeed };
  };

  getSpeed = (): void => {
    const { totalSpeed, sailSpeed, engineSpeed } = this.countSpeed();
    if (this.additionalEngines && this.additionalEngines.length > 0) {
      console.log(`This ship has ${this.numberOfSail} sail(s) and uses these engine:`);
      this.additionalEngines.map((engine, index) =>
        console.log(
          `${index + 1}. Engine ${engine.name} with a speed of ${engine.speed} km/h`
        )
      );
      console.log(
        `Total speed is: ${totalSpeed} (engine: ${engineSpeed} - sail: ${sailSpeed})`
      );
    } else
      console.log(
        `This is a traditional sailboats with a speed of ${this.countSpeed().sailSpeed}`
      );
  }
}

// Cruises class implementation
type CruisesProps = Omit<ShipProps, "type"> & {
  width: number;
  length: number;
  height: number;
};

class Cruises extends Ship {
  private width: number;
  private length: number;
  private height: number;

  // Use object param for more than two params
  constructor({ name, width, length, height }: CruisesProps) {
    super(name, 'cruises');
    this.width = width;
    this.length = length;
    this.height = height;
  }
  
  getSpeed = (): void => {
    let speed = this.width + this.height + this.length;
    if (speed < 200) speed = 200;
    if (speed > 800) speed = 800;
    console.log(`The speed is ${speed}`)
  }
}

// Test for Motorboats class
const motorboats: Motorboats = new Motorboats("Motorboats A", 2);
motorboats.getInformation();
motorboats.getSpeed();
motorboats.setNumberOfEngine(3);
motorboats.getSpeed();

console.log("");

// Test for Sailboats class
const additionalEngines: Engine[] = [ 
  { name: 'X1', speed: 100 },
  { name: 'Z1', speed: 120 },
];
const sailboats: Sailboats = new Sailboats({ name: "Sailboats B", numberOfSail: 2, additionalEngines });
sailboats.getInformation();
sailboats.getSpeed();

console.log("");

const sailboats2: Sailboats = new Sailboats({ name: "Sailboats C", numberOfSail: 4 });
sailboats2.getInformation();
sailboats2.getSpeed();

console.log("");

const sailboats3: Sailboats = new Sailboats({ name: "Sailboats D", numberOfSail: 4, additionalEngines: [] });
sailboats3.getInformation();
sailboats3.getSpeed();

console.log("");

// Test for Cruises class
const cruises: Cruises = new Cruises({name: "Cruises E", width: 40, length: 200, height: 10})
cruises.getInformation();
cruises.getSpeed();