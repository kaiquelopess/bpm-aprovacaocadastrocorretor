import { Component, OnInit } from '@angular/core';
import { ConsultaDadosService } from 'src/app/services/consulta-dados.service';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from '../services/token.service';

declare function loadUploader(perfil: number, susep: string, documento: string, razao: string): any;

// declare function checkDocuments(): any;
// declare function sendDocuments(): any;

@Component({
  selector: 'app-bpm-documentos-pj',
  templateUrl: './bpm-documentos-pj.component.html',
  styleUrls: ['./bpm-documentos-pj.component.css']
})
export class BpmDocumentosPjComponent implements OnInit {

  constructor(  ) { } 

susep: string;
cpfCnpj: string;
perfil = 301;

ngOnInit() {

  const cpfcnpj = sessionStorage.getItem('cnpjCpf');
  const susep = sessionStorage.getItem('codigoSusep');
  const nome = sessionStorage.getItem('nomecorretor');

  loadUploader(301, susep, cpfcnpj, nome);
}

}