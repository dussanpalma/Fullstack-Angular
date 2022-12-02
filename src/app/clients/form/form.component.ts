import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/shared/interfaces/client';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public client: Client = new Client();
  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.cargarCliente();
  }

  public create(): void {
    this.clienteService
      .create(this.client)
      .subscribe((response) => this.router.navigate(['/clientes']));
  }

  cargarCliente(): void {
    this.activateRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.clienteService
          .getCliente(id)
          .subscribe((Client) => (this.client = Client));
      }
    });
  }

  update(): void {
    /*this.clienteService.update(this.cliente)
      .subscribe(
        json => {
          this.router.navigate(['/clientes']);
          swal('Cliente Actualizado', `${json.mensaje}: ${json.cliente.nombre}`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      )*/
  }
}
