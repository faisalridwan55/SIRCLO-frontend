var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ship = /** @class */ (function () {
    function Ship(
    // Use constructor shorthand
    name, type) {
        var _this = this;
        this.name = name;
        this.type = type;
        this.getInformation = function () {
            return console.log("Name: " + _this.name + " - Type: " + _this.type);
        };
    }
    return Ship;
}());
var Motorboats = /** @class */ (function (_super) {
    __extends(Motorboats, _super);
    // Use constructor shorthand
    function Motorboats(name, numberOfEngine) {
        var _this = _super.call(this, name, "motorboats") || this;
        _this.numberOfEngine = numberOfEngine;
        _this.countSpeed = function () {
            return Motorboats.engineSpeed * _this.numberOfEngine;
        };
        _this.setNumberOfEngine = function (num) {
            console.log("Change engine from " + _this.numberOfEngine + " to " + num);
            _this.numberOfEngine = num;
        };
        _this.getSpeed = function () {
            return console.log("Speed of this ship is " + _this.countSpeed() + " km/h");
        };
        return _this;
    }
    Motorboats.engineSpeed = 120;
    return Motorboats;
}(Ship));
var Sailboats = /** @class */ (function (_super) {
    __extends(Sailboats, _super);
    // Use object param for more than two params
    function Sailboats(_a) {
        var name = _a.name, numberOfSail = _a.numberOfSail, additionalEngines = _a.additionalEngines;
        var _this = _super.call(this, name, "sailboats") || this;
        _this.speedOfSail = function () {
            return Sailboats.defaultSpeed * _this.numberOfSail;
        };
        _this.countSpeed = function () {
            var engineSpeed = _this.additionalEngines
                ? _this.additionalEngines.reduce(function (totalSpeed, engine) { return totalSpeed + engine.speed; }, 0)
                : 0;
            var sailSpeed = _this.speedOfSail();
            return { totalSpeed: sailSpeed + engineSpeed, sailSpeed: sailSpeed, engineSpeed: engineSpeed };
        };
        _this.getSpeed = function () {
            var _a = _this.countSpeed(), totalSpeed = _a.totalSpeed, sailSpeed = _a.sailSpeed, engineSpeed = _a.engineSpeed;
            if (_this.additionalEngines && _this.additionalEngines.length > 0) {
                console.log("This ship has " + _this.numberOfSail + " sail(s) and uses these engine:");
                _this.additionalEngines.map(function (engine, index) {
                    return console.log(index + 1 + ". Engine " + engine.name + " with a speed of " + engine.speed + " km/h");
                });
                console.log("Total speed is: " + totalSpeed + " (engine: " + engineSpeed + " - sail: " + sailSpeed + ")");
            }
            else
                console.log("This is a traditional sailboats with a speed of " + _this.countSpeed().sailSpeed);
        };
        _this.numberOfSail = numberOfSail;
        _this.additionalEngines = additionalEngines;
        return _this;
    }
    Sailboats.defaultSpeed = 80;
    return Sailboats;
}(Ship));
var Cruises = /** @class */ (function (_super) {
    __extends(Cruises, _super);
    // Use object param for more than two params
    function Cruises(_a) {
        var name = _a.name, width = _a.width, length = _a.length, height = _a.height;
        var _this = _super.call(this, name, 'cruises') || this;
        _this.getSpeed = function () {
            var speed = _this.width + _this.height + _this.length;
            if (speed < 200)
                speed = 200;
            if (speed > 800)
                speed = 800;
            console.log("The speed is " + speed);
        };
        _this.width = width;
        _this.length = length;
        _this.height = height;
        return _this;
    }
    return Cruises;
}(Ship));
// Test for Motorboats class
var motorboats = new Motorboats("Motorboats A", 2);
motorboats.getInformation();
motorboats.getSpeed();
motorboats.setNumberOfEngine(3);
motorboats.getSpeed();
console.log("");
// Test for Sailboats class
var additionalEngines = [
    { name: 'X1', speed: 100 },
    { name: 'Z1', speed: 120 },
];
var sailboats = new Sailboats({ name: "Sailboats B", numberOfSail: 2, additionalEngines: additionalEngines });
sailboats.getInformation();
sailboats.getSpeed();
console.log("");
var sailboats2 = new Sailboats({ name: "Sailboats C", numberOfSail: 4 });
sailboats2.getInformation();
sailboats2.getSpeed();
console.log("");
var sailboats3 = new Sailboats({ name: "Sailboats D", numberOfSail: 4, additionalEngines: [] });
sailboats3.getInformation();
sailboats3.getSpeed();
console.log("");
// Test for Cruises class
var cruises = new Cruises({ name: "Cruises D", width: 40, length: 200, height: 10 });
cruises.getInformation();
cruises.getSpeed();
