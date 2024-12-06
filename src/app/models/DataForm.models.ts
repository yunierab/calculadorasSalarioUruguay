import { ContentFormDataComponent } from './../componentes/content-form-data/content-form-data.component';
export class DataForm
{
  salarioNominal: number;  // Salario nominal
  tieneHijosACargo: boolean;  // Hijos a cargo
  tieneConyugueACargo: boolean;  // Conyugue a cargo
  porcientoDeduccionesPersonasCargo: number; // Porcentaje de deducción de las personas a cargo
  cantidadHijosSinDiscapacidad: number; // Cantidad de hijos sin discapacidad
  cantidadHijosConDiscapacidad: number; // Cantidad de hijos con discapacidad
  aportaFondoSolidaridad: boolean; // Aporta al Fondo de Solidaridad
  adicionalFondoSolidaridad: boolean; // Adicional Fondo de Solidaridad
  aporteMensualCJPPUCajaNotarial: number; // Aporteensual a CJPPU o Caja Notarial
  otrasDeducciones: number; // Otras deducciones


constructor()
{
  this.salarioNominal = 0;
  this.tieneHijosACargo = false;
  this.tieneConyugueACargo = false;
  this.porcientoDeduccionesPersonasCargo = 0;
  this.cantidadHijosSinDiscapacidad = 0;
  this.cantidadHijosConDiscapacidad = 0;
  this.aportaFondoSolidaridad = false;
  this.adicionalFondoSolidaridad = false;
  this.aporteMensualCJPPUCajaNotarial = 0;
  this.otrasDeducciones = 0;
}



}
