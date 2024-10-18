import { Component, OnInit } from '@angular/core';
declare var iniciarDatos: any;

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  data = {
    PayboxRemail: "negocioprueba1ppx@gmail.com",
    PayboxSendmail: "danielrepreuno@gmail.com",
    PayboxRename: "Negocio Test",
    PayboxSendname: "Darly Naranjo",
    PayboxBase0: "2.0",
    PayboxBase12: "10.0",
    PayboxDescription: "Descripción del pago",
    PayboxLanguage: "es",
    PayboxDirection: "San carlos",
    PayBoxClientPhone: '0998665577',
    PayboxProduction: false,
    PayboxRecurrent: true,
    PayboxIdPlan: '171',
    PayboxPermitirCalendarizar: true,
    PayboxPagoInmediato: true,
    PayboxCobroPrueba: false,
    PayBoxClientIdentification: '0902395130',
    PayboxEnvironment: 'sandbox',
    PayboxAmountVariablePlan: true,
    PayboxFrequencyPlan: 'MEN',
    PayboxTieneIvaPlan: true,
    PayboxDescriptionPlan: 'Descripción del plan',
    PayboxPagoPlux: true,
    PayboxIdElement: 'idElementoTest',

    onAuthorize: (response: any) => {
      if (response.status === 'succeeded') {
        console.log({
          amount: response.amount,
          deferred: response.deferred,
          interest: response.interest,
          interestValue: response.interestValue,
          amountWoTaxes: response.amountWoTaxes,
          taxesValue: response.taxesValue,
          cardInfo: response.cardInfo,
          cardIssuer: response.cardIssuer,
          cardType: response.cardType,
          clientID: response.clientID,
          clientName: response.clientName,
          fecha: response.fecha,
          id_transaccion: response.id_transaccion,
          state: response.state,
          token: response.token,
          tipoPago: response.tipoPago
        });
        console.log(response);
      } else {
        console.error("El pago no fue exitoso:", response);
      }
    }
  };

  ngOnInit() {
    // Verifica que la función esté disponible
    if (typeof (window as any).iniciarDatos === 'function') {
      (window as any).iniciarDatos(this.data);
    } else {
      console.error('La función iniciarDatos no está definida.');
    }
  }
}
