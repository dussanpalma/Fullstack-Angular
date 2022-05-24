import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClienteService } from './shared/services/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { ProductsComponent } from './products/products.component';
import { StoresComponent } from './stores/stores.component';
import { DetalleComponent } from './clients/detalle/detalle.component';
import { FormComponent } from './clients/form/form.component';
import { FormsModule } from '@angular/forms';
import { DetalleFacturaComponent } from './facturas/detalle-factura.component'

const routes: Routes = [
 {path: '', redirectTo: '/', pathMatch: 'full'},
 {path: 'clientes', component: ClientsComponent},
 {path: 'mecanicos', component: MechanicsComponent},
 {path: 'productos', component: ProductsComponent},
 {path: 'tiendas', component: StoresComponent},
 {path: 'clientes/form', component: FormComponent},
 {path: 'clientes/form/:id', component: FormComponent},
 {path: 'clientes/:id', component: DetalleComponent},
 {path: 'facturas/:id', component: DetalleFacturaComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    HeaderComponent,
    FooterComponent,
    MechanicsComponent,
    ProductsComponent,
    StoresComponent,
    DetalleComponent,
    FormComponent,
    DetalleFacturaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
