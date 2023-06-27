export class Car {

    private plate: string;
    private year: number;
    private color: string;
    private model: string;
    private mileage: number;
    private dayValue: number;
    private notes?: string;

    constructor(plate: string, year: number, color: string, model: string, mileage: number, dayValue: number, notes?: string) {
        this.plate = plate;
        this.year = year;
        this.color = color;
        this.model = model;
        this.mileage = mileage;
        this.dayValue = dayValue;
        if (notes) {
            this.notes = notes;
        }
    }
}

export class SportCar extends Car {

    private from0To100: number;
    private improvement: string[];

    constructor(plate: string, year: number, color: string, model: string, mileage: number, dayValue: number, from0To100: number, improvement: string, notes?: string) {
        super(plate, year, color, model, mileage, dayValue, notes);
        this.from0To100 = from0To100;
        this.improvement = [];
    }

    newImprovement(improvement: string) {
        this.improvement.push(improvement);
    }
}

export class UtilCar extends Car {

    passengersCapacity: number;
    bagageSize: number;
    kmPerLiter: number;

    constructor(plate: string, year: number, color: string, model: string, mileage: number, dayValue: number, passengersCapacity: number, bagageSize: number, kmPerLiter: number, notes?: string) {
        super(plate, year, color, model, mileage, dayValue, notes);
        this.passengersCapacity = passengersCapacity;
        this.bagageSize = bagageSize;
        this.kmPerLiter = kmPerLiter;
    }
}