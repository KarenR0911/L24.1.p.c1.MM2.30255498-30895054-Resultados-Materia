export default class Salon {
  constructor() {
    this.contEstudiante = 0;
    this.contAprobados = 0;
    this.MayorNota = 0;
    this.auxCedula = 0;
  }
  procesarEstudiante(est) {
    this.contEstudiante++;
    if (est.notaFinal >= 48) {
      this.contAprobados++;
      if (est.notaFinal > this.MayorNota) {
        this.MayorNota = est.notaFinal;
        this.auxCedula = est.cedula;
      }
    }
  }
  calcPorcentaje() {
    return (this.contAprobados / this.contEstudiante) * 100;
  }
  devolverMejorEstudiante() {
    return this.auxCedula;
  }
}
