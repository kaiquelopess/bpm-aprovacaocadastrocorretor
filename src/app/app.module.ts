import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BpmRegistroPfComponent } from './bpm-registro-pf/bpm-registro-pf.component';
import { BpmContatosPfComponent } from './bpm-contatos-pf/bpm-contatos-pf.component';
import { BpmIcsPfComponent } from './bpm-ics-pf/bpm-ics-pf.component';
import { BpmDocumentosPfComponent } from './bpm-documentos-pf/bpm-documentos-pf.component';
import { BpmRegistroPjComponent } from './bpm-registro-pj/bpm-registro-pj.component';
import { BpmContatosPjComponent } from './bpm-contatos-pj/bpm-contatos-pj.component';
import { BpmIcsPjComponent } from './bpm-ics-pj/bpm-ics-pj.component';
import { BpmDocumentosPjComponent } from './bpm-documentos-pj/bpm-documentos-pj.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule, MatRippleModule, MatInputModule, MatFormFieldModule, MatButtonModule} from '@angular/material';
import { DemoMaterialModule } from 'material-module';
import { TabsComponent } from './tabs/tabs.component';
import { TabsPjComponent } from './tabs/tabs-pj/tabs-pj.component';
import { BpmComponent } from './bpm/bpm.component';
import { BpmPjComponent } from './bpm/bpm-pj/bpm-pj.component';
import { TextMaskModule } from 'angular2-text-mask';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    BpmRegistroPfComponent,
    BpmContatosPfComponent,
    BpmIcsPfComponent,
    BpmDocumentosPfComponent,
    BpmRegistroPjComponent,
    BpmContatosPjComponent,
    BpmIcsPjComponent,
    BpmDocumentosPjComponent,
    TabsComponent,
    TabsPjComponent,
    BpmComponent,
    BpmPjComponent,
    UploadComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxMaskModule.forRoot(),
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    TextMaskModule
   ],
   exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
