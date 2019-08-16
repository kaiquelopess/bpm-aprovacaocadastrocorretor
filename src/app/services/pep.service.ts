import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ParamsService} from './params.service';

@Injectable({
    providedIn: 'root'
})
export class PepService {

    constructor(private http: HttpClient,
                private params: ParamsService) {
    }

    pepService(salvarpep: any) {
        const environment = this.params.getParams();

        const apiPath = 'apps/cadastro-corretores/v1/equifaxgo';

        const apiMethodUri = environment['apiBaseAddress'] + apiPath;
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        };

        const data = {

            'DsEquifaxEntrada': {

                'paramequifax': [

                    {

                        'codsis': 'CM',

                        'cod-empresa': '',

                        'cod-sucursal': '',

                        'cod-carteira': '',

                        'tip-docum': '',

                        'seq-docum': '',

                        'seq-endosso': '',

                        'cod-estipulante': '',

                        'num-subestip': '',

                        'cod-cotacao': '',

                        'numseqid-pj': '',

                        'cod-ramo': '',

                        'dat-calculo': '',

                        'seq-sinistro': '',

                        'nome-cliente': salvarpep.nome,

                        'tipo-pessoa': salvarpep.tipoPessoa,

                        'cpfcgc': salvarpep.cnpjCpf,

                        'sta-liberado': 'NO',

                        'consulta': 'NO',

                        'dat-criacao': '',

                        'tip-relac': '',

                        'gera-carta': 'NO',

                        'dados-detalhados': 'TRUE',

                        'cod-atuacao': '4',

                        'valor-premio-total': '0',

                        'mostra-erro': 'TRUE'

                    }

                ]

            }

        };

        return this.http.post(apiMethodUri, data, httpOptions);
    }

    // pepServiceMock(salvarpep: any) : Observable<any> {
    //   const url = "./assets/modelo-pep.json";

    //   return this.http.get(url);
    // }
}
