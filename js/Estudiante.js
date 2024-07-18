export default class Estudiante {
  constructor(ced, nF) {
    this.cedula = ced;
    this.notaFinal = nF;
  }
  set cedula(ced) {
    this._cedula = ced;
  }
  set notaFinal(nF) {
    this._notaFinal = nF;
  }
  get cedula() {
    return this._cedula;
  }
  get notaFinal() {
    return this._notaFinal;
  }
}
