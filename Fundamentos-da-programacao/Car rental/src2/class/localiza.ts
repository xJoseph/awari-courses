import Promotion from "./mail_promotion";
import Reserve from "./reserve";
import { Car } from "./car";
import { Employee, Client } from "./people"

export default class Localiza {
    private Cars: Car[];
    private Clients: Client[];
    private Employees: Employee[];
    private Promotions: Promotlion[];
    private Reserves: Reserve[];

    constructor() {
        this.Cars = [];
        this.Clients = [];
        this.Employees = [];
        this.Promotions = [];
        this.Reserves = [];
    }

    newCar(car: Car) {
        this.Cars.push(car);
    }
    newClient(client: Client) {
        this.Clients.push(client);
    }
    newEmployee(employee: Employee) {
        this.Employees.push(employee);
    }
    newPromotion(promotion: Promotion) {
        this.Promotions.push(promotion);
    }
    newReserve(reserve: Reserve) {
        this.Reserves.push(reserve);
    }

    sendPromotionToClient(promotion: Promotion, cpf: Client) {
        this.Promotions.sendMail(this.Clients.map(client => client.cpf = cpf));
    }
}