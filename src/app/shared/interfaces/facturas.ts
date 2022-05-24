import { Client } from "./client";
import { ItemFactura } from "./item-factura";

export class Facturas {
    id_factura!: number;
    descripcion!: string;
    observacion!: string;
    items: Array<ItemFactura>=[];
    createAt!: string;
    client!: Client;
    total!: number;

    calcularGranTotal(): number {
        this.total = 0;
        this.items.forEach((item: ItemFactura) => {
          this.total += item.calcularImporte();
        });
        return this.total;
      }
}
