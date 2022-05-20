import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { CoreComponent } from './core/core.component';
import { SummaryComponent } from './summary/summary.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';

@NgModule({
  declarations: [
    AppComponent,
    CuentasComponent,
    CoreComponent,
    SummaryComponent,
    TransaccionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
