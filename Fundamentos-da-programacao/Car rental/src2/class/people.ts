class People {

    name: string;
    cpf: string;
    age: number;
    address: string;
    phone: string;

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

    hireDate: Date;
    wage: string;
    rentsMade: number;
    isActive: boolean;

    constructor(name: string, cpf: string, age: number, address: string, phone: number, hireDate: number, wage: number, rentsMade: number, isActive: boolean) {
        const _hireDate = String(hireDate);

        super(name, cpf, age, address, phone);
        this.hireDate = new Date(Number(_hireDate.slice(0, 4)), Number(_hireDate.slice(4, 6)) - 1, Number(_hireDate.slice(6)));
        this.wage = "R$ " + wage + ".00";
        this.rentsMade = rentsMade;
        this.isActive = isActive;
    }
}

export class Client extends People {

    birthDate: Date;
    driverLicenseNumber: number;
    driverLicensePhoto: string;
    driverLicenseExpirationDate: Date;
    email: string;

    constructor(name: string, cpf: string, age: number, address: string, phone: number, birthDate: number, driverLicenseNumber: number, driverLicensePhoto: string, driverLicenseExpirationDate: number, email: string) {
        const _birthDate = String(birthDate);
        const _driverLicenseExpirationDate = String(driverLicenseExpirationDate);

        super(name, cpf, age, address, phone)
        this.birthDate = new Date(Number(_birthDate.slice(0, 4)), Number(_birthDate.slice(4, 6)) - 1, Number(_birthDate.slice(6)));
        this.driverLicenseNumber = driverLicenseNumber;
        this.driverLicensePhoto = driverLicensePhoto;
        this.driverLicenseExpirationDate = new Date(Number(_driverLicenseExpirationDate.slice(0, 4)), Number(_driverLicenseExpirationDate.slice(4, 6)) - 1, Number(_driverLicenseExpirationDate.slice(6)));
        this.email = email;
    }

    getEmail() {
        return this.email;
    }
}