import { Facturas } from "./facturas";

export class Client {
    id!: number;
    name!: string; 
    secondName!: string;
    lastName!: string;
    secondLastName!: string;
    email!: string;
    createAt!: Date;
    typeDocument!: string;
    document!: string;
    phone!: string;
    facturas: Array<Facturas> = [];
}
