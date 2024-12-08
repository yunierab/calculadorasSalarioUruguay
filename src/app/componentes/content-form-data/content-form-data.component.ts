import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-form-data',
  templateUrl: './content-form-data.component.html',
  styleUrl: './content-form-data.component.css'
})
export class ContentFormDataComponent implements OnInit
{
   inputSalarioNominal: number = 0;
   inputCheckHijosACargo: boolean = false;
   inputCheckConyugueACargo: boolean = false;
   inputPorcientoDeduccionPersonasCargo: number = 0;
   inputCantidadHijosSinDiscapacidad: number = 0;
   inputCantidadHijosConDiscapacidad: number = 0;
   inputAportaFondoSolidaridad: number = 0;
   inputCheckAdicionalFondoSolidaridad: boolean = false;
   inputAporteMensualCajaNotarial: number = 0;
   inputOtrasDeducciones: number = 0;

  constructor() {
  }

  ngOnInit(): void
  {

  }

  mostrarDatosFormulario(): void
  {
      console.log("Salario nominal: ", this.inputSalarioNominal);
      console.log("Tiene hijos a cargo: ", this.inputCheckHijosACargo);
      console.log("Tiene cónyugue a cargo: ", this.inputCheckConyugueACargo);
      console.log("Porcentaje de deducción de las personas a cargo: ", this.inputPorcientoDeduccionPersonasCargo);
      console.log("Cantidad de hijos sin discapacidad: ", this.inputCantidadHijosSinDiscapacidad);
      console.log("Cantidad de hijos con discapacidad: ", this.inputCantidadHijosConDiscapacidad);
      console.log("Aporta fondo solidaridad: ", this.inputAportaFondoSolidaridad);
      console.log("Adicional fondo solidaridad: ", this.inputCheckAdicionalFondoSolidaridad);
      console.log("Aporte mensual a CJPPU o Caja Notarial: ", this.inputAporteMensualCajaNotarial);
      console.log("Otras deducciones: ", this.inputOtrasDeducciones);
  }

}
