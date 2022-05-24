import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Facturas } from '../shared/interfaces/facturas';
import { FacturasService } from '../shared/services/facturas.service';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.css']
})
export class DetalleFacturaComponent implements OnInit {

  factura!: Facturas;
  
  constructor(private facturasService: FacturasService, 
     private activatedRoute: ActivatedRoute) { }

     ngOnInit() {
      this.activatedRoute.paramMap.subscribe(params => {
        let id = +params.getAll('id');
        if (id) {
          this.facturasService.getFactura(id).subscribe(factura => {
           this.factura = factura;
          });
        }
      });
    }
}
