import { Component, OnInit } from '@angular/core';
import { ConsultaDadosService } from 'src/app/services/consulta-dados.service';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from '../services/token.service';

declare function loadUploader(perfil: number, susep: string, documento: string, razao: string): any;

// declare function checkDocuments(): any;
// declare function sendDocuments(): any;

@Component({
  selector: 'app-bpm-documentos-pf',
  templateUrl: './bpm-documentos-pf.component.html',
  styleUrls: ['./bpm-documentos-pf.component.css']
})
export class BpmDocumentosPfComponent implements OnInit {

  constructor( )
    { }

susep: string;
cpfCnpj: string;
perfil = 302;

ngOnInit() {
  const susep = sessionStorage.getItem("susep");
  const cpfCnpj = sessionStorage.getItem("cpfcnpj");
  const nome = sessionStorage.getItem("nome");

            loadUploader(302, susep, cpfCnpj, nome);
}

}