import Reserve from "./reserve";

export class Car {

    public static plate: string;
    public static year: number;
    public static color: string;
    public static model: string;
    public static mileage: number;
    public static dayValue: number;
    public static notes?: string;

    constructor(plate: string, year: number, color: string, model: string, mileage: number, dayValue: number, notes?: string) {
        Car.plate = plate;
        Car.year = year;
        Car.color = color;
        Car.model = model;
        Car.mileage = mileage;
        Car.dayValue = dayValue;
        if (notes) {
            Car.notes = notes;
        }
    }
}

export class SportCar extends Car {

    public static from0To100: number;
    public static improvement: string[];

    constructor(plate: string, year: number, color: string, model: string, mileage: number, dayValue: number, from0To100: number, improvement: string, notes?: string) {
        super(plate, year, color, model, mileage, dayValue, notes);
        SportCar.from0To100 = from0To100;
        SportCar.improvement = [];
    }

    public newImprovement(improvement: string) {
        SportCar.improvement.push(improvement);
    }

    public getImprovements() {
        console.log(SportCar.improvement);
    }
}

export class UtilCar extends Car {

    public static passengersCapacity: number;
    public static bagageSize: number;
    public static kmPerLiter: number;

    constructor(plate: string, year: number, color: string, model: string, mileage: number, dayValue: number, passengersCapacity: number, bagageSize: number, kmPerLiter: number, notes?: string) {
        super(plate, year, color, model, mileage, dayValue, notes);
        UtilCar.passengersCapacity = passengersCapacity;
        UtilCar.bagageSize = bagageSize;
        UtilCar.kmPerLiter = kmPerLiter;
    }

}