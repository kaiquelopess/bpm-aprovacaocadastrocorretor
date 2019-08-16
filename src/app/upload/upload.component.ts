import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
    username = '';
    cpfcnpj = '';
    susep = '';
    perfil = 301;

    constructor() {

    }

    ngOnInit() {
    this.username = sessionStorage.getItem('susep') + '_' + sessionStorage.getItem('cpfcnpj');
    this.cpfcnpj = sessionStorage.getItem('cpfcnpj');
    this.susep = sessionStorage.getItem('susep');
    }

}