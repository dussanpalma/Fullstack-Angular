import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/interfaces/client';
import { ClienteService } from '../shared/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {

  clients!: Client[];

  constructor(private clienteService: ClienteService) {}

  ngOnInit():void {
    this.clienteService.getClientes().subscribe(
     
      clients => this.clients = clients

    );
  }


  delete(client: Client): void {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Esta seguro?',
      text: `¿Seguro que desea eliminar al cliente ${client.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!', 
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
         
        this.clienteService.delete(client.id).subscribe(
          Response => {
            this.clients = this.clients.filter(cli => cli !== client)
            swalWithBootstrapButtons.fire(
              'Cliente Eliminado!',
                  `Cliente ${client.name} eliminado con éxito.`,
                  'success'
            )

          }
        )
      } 
    })
   

  }

}
