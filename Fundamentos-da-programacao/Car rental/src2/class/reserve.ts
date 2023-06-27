import { Client } from "./people";

export default class Reserve {
    constructor(
        public code: string,
        public status: boolean,
        public startDate: Date,
        public expirationDate: Date,
        public client: Client
    ) { }

    setInactive() {
        this.status = false;
    }
    getStatus() {
        return this.status;
    }
    getClient() {
        return this.client;
    }
}