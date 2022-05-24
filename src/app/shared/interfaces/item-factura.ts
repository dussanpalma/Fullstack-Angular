import { Products } from './products';

export class ItemFactura {
  id_item!: number;
  producto!: Products;
  cantidad: number = 1;
  importe!: number;

  public calcularImporte(): number {
    return this.cantidad * this.producto.precio;
  }
  
}
