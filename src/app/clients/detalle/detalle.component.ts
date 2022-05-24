import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/shared/interfaces/client';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'detalle-cliente',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

 client!: Client;


  constructor(private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.getAll('id');
      if (id) {
        this.clienteService.getCliente(id).subscribe(client => {
         this.client = client;
        });
      }
    });
  }
}
