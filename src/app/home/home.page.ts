import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  resposta: any;
  resposta2: any = [];

  cep: string = '';
  cidade: string = '';
  estado: string = '';
  rua: string = '';

  constructor(private http: HttpClient) {}

  consultaEndereco() {
    let regex = /\d{5}-?\d{3}/g;

    if (regex.test(this.cep)) {
      this.http
        .get(`https://viacep.com.br/ws/${this.cep}/json/`)
        .subscribe((res) => {
          this.resposta = res;
        });
    } else {
      alert('Coloque um CEP válido');
    }
    this.cep = '';
  }

  consultaCEP() {
    this.http
      .get(
        `https://viacep.com.br/ws/${this.estado}/${this.cidade}/${this.rua}/json/`
      )
      .subscribe((res:any) => {
        this.resposta2 = res;
      });


    this.cidade = '';
    this.rua = '';
    this.estado = '';
  }
}
