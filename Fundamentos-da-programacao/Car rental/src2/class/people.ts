import { UtilCar, SportCar } from "./car";

class People {

    public name: string;
    public cpf: string;
    public age: number;
    public address: string;
    public phone: string;

    constructor(name: string, cpf: string, age: number, address: string, phone: number) {
        const _cpf = cpf;
        const _phone = String(phone);

        this.name = name;
        this.cpf = _cpf.slice(0, 3) + "." + _cpf.slice(3, 6) + "." + _cpf.slice(6, 9) + "-" + _cpf.slice(9);
        this.age = age;
        this.address = address;
        this.phone = "+" + _phone.slice(0, 2) + " (" + _phone.slice(2, 4) + ") " + _phone.slice(4, 9) + "-" + _phone.slice(9);
    }
}

export class Employee extends People {

    public static hireDate: Date;
    public static wage: string;
    public static rentsMade: number;
    public static isActive: boolean;

    constructor(name: string, cpf: string, age: number, address: string, phone: number, hireDate: number, wage: number, rentsMade: number, isActive: boolean) {
        const _hireDate = String(hireDate);

        super(name, cpf, age, address, phone);
        Employee.hireDate = new Date(Number(_hireDate.slice(0, 4)), Number(_hireDate.slice(4, 6)) - 1, Number(_hireDate.slice(6)));
        Employee.wage = "R$ " + wage + ".00";
        Employee.rentsMade = rentsMade;
        Employee.isActive = isActive;
    }
}

export class Client extends People {

    public static birthDate: Date;
    public static driverLicenseNumber: number;
    public static driverLicensePhoto: string;
    public static driverLicenseExpirationDate: Date;
    public static email: string;

    constructor(name: string, cpf: string, age: number, address: string, phone: number, birthDate: number, driverLicenseNumber: number, driverLicensePhoto: string, driverLicenseExpirationDate: number, email: string) {
        const _birthDate = String(birthDate);
        const _driverLicenseExpirationDate = String(driverLicenseExpirationDate);

        super(name, cpf, age, address, phone)
        Client.birthDate = new Date(Number(_birthDate.slice(0, 4)), Number(_birthDate.slice(4, 6)) - 1, Number(_birthDate.slice(6)));
        Client.driverLicenseNumber = driverLicenseNumber;
        Client.driverLicensePhoto = driverLicensePhoto;
        Client.driverLicenseExpirationDate = new Date(Number(_driverLicenseExpirationDate.slice(0, 4)), Number(_driverLicenseExpirationDate.slice(4, 6)) - 1, Number(_driverLicenseExpirationDate.slice(6)));
        Client.email = email;
    }

    public getEmail() {
        return Client.email;
    }

    public getName() {
        return this.name;
    }

    public createReserve(car: UtilCar | SportCar) {
        // if (car. === false) {
            console.log(`Reserva criado para o cliente ${this.name}`);

        // }

    }
}