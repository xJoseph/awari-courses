import { Client } from "./people";

export default class Promotion {
    public static title: string;
    public static message: string;
    public static expirationDate: Date;
    static sender = process.env["LOCALIZA_EMAIL"];

    constructor(title: string, message: string, expirationDate: number) {
        const _expirationDate = String(expirationDate);

        Promotion.title = title;
        Promotion.message = message;
        Promotion.expirationDate = new Date(Number(_expirationDate.slice(0, 4)), Number(_expirationDate.slice(4, 6)) - 1, Number(_expirationDate.slice(6)));
    }

    public static sendEmail(client: Client) {
        console.log(`Promoção com o assunto: ${this.title}\nMensagem: ${this.message}\nE expirará em: ${this.expirationDate}`);
        
        console.log(`Email enviado para o cliente ${client.getName()} com o email ${client.getEmail()}`);

    }
}