import { Client } from "./people";

export default class Reserve {
    public static code: string;
    public static status: boolean;
    public static startDate: Date;
    public static expirationDate: Date;

    constructor(code: string, status: boolean, startDate: number, expirationDate: number, client: Client) {
        const _startDate = String(startDate);
        const _expirationDate = String(expirationDate);

        Reserve.code = code;
        Reserve.status = status;
        Reserve.startDate = new Date(Number(_startDate.slice(0, 4)), Number(_startDate.slice(4, 6)) - 1, Number(_startDate.slice(6)));
        Reserve.expirationDate = new Date(Number(_expirationDate.slice(0, 4)), Number(_expirationDate.slice(4, 6)) - 1, Number(_expirationDate.slice(6)));
    }

    setInactive() {
        Reserve.status = false;
        console.log("Reserva cancelada");
        
    }
    setActive() {
        Reserve.status = true;
        console.log("Reserva criada");
    }
    getStatus() {
        return Reserve.status;
    }
}