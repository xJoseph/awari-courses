export default class Promotion {
    title: string;
    description: string;
    expirationDate: Date;
    static sender = process.env["LOCALIZA_EMAIL"];

    constructor(title: string, description: string, expirationDate: number) {
        const _expirationDate = String(expirationDate);

        this.title = title;
        this.description = description;
        this.expirationDate = new Date(Number(_expirationDate.slice(0, 4)), Number(_expirationDate.slice(4, 6)) - 1, Number(_expirationDate.slice(6)));
    }

    sendEmail(email: string) {
        console.log("E-mail enviado.");

    }
}