import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ParamsService} from './params.service';

@Injectable({
    providedIn: 'root'
})
export class ConsultaDadosService {

    constructor(private http: HttpClient,
                private params: ParamsService) {
    }

    consultaDados(susep: string, cpfCnpj: string): any {
        const environment = this.params.getParams();

        const apiPath = 'apps/cadastro-corretores/v1/novoscorretores';

        const apiMethodUri = environment['apiBaseAddress'] + apiPath;
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            })

            , params: new HttpParams()
                .set('pSusep', susep)
                .set('pCpfCnpj', cpfCnpj)
        };


        return this.http.get(apiMethodUri, httpOptions);

    }


}
