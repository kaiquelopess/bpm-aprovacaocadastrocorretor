import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ParamsService} from './params.service';

@Injectable({
    providedIn: 'root'
})
export class CepService {

    constructor(private http: HttpClient,
                private params: ParamsService) {
    }

    _address = '';
    _latitude = '';
    _longitude = '';

    @Input()
    set address(value) {
        this._address = value;
    }

    set latitude(value) {
        this._latitude = value;
    }

    set longitude(value) {
        this._longitude = value;
    }


    getCep(address: any): any {
        const environment = this.params.getParams();

        const apiPath = 'corporativo/localizacao/v1/enderecos';

        const apiMethodUri = environment['apiBaseAddress'] + apiPath;
        const httpOptions = {

            params: new HttpParams()
                .set('address', address)
        };

        return this.http.get(apiMethodUri, httpOptions);

    }

    getSucursaisProx(latitude: any, longitude: any): any {
        const environment = this.params.getParams();

        const apiPathh = 'corporativo/empresa/v1/sucursais';

        const apiMethodUri = environment['apiBaseAddress'] + apiPathh;
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            })

            , params: new HttpParams()
                .set('latitude', latitude)
                .set('longitude', longitude)
        };

        return this.http.get(apiMethodUri, httpOptions);

    }


}
