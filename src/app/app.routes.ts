import { Routes } from '@angular/router';
import { BpmIcsPfComponent } from './bpm-ics-pf/bpm-ics-pf.component';
import { BpmIcsPjComponent } from './bpm-ics-pj/bpm-ics-pj.component';
import { BpmRegistroPfComponent } from './bpm-registro-pf/bpm-registro-pf.component';
import { BpmRegistroPjComponent } from './bpm-registro-pj/bpm-registro-pj.component';
import { BpmContatosPfComponent } from './bpm-contatos-pf/bpm-contatos-pf.component';
import { BpmContatosPjComponent } from './bpm-contatos-pj/bpm-contatos-pj.component';
import { BpmDocumentosPfComponent } from './bpm-documentos-pf/bpm-documentos-pf.component';
import { BpmDocumentosPjComponent } from './bpm-documentos-pj/bpm-documentos-pj.component';
import { TabsComponent } from './tabs/tabs.component';
import { BpmComponent } from './bpm/bpm.component';
import { BpmPjComponent } from './bpm/bpm-pj/bpm-pj.component';



export const appRoutes: Routes = [
    { path: 'app-bpm-ics-pf/:susep/:cpfCnpj/:usuario/:etapa', component: BpmIcsPfComponent},
    { path: 'app-bpm-ics-pj/:susep/:cpfCnpj/:usuario/:etapa', component: BpmIcsPjComponent},
    { path: 'app-bpm-registro-pf/:susep/:cpfCnpj/:usuario/:etapa', component: BpmRegistroPfComponent},
    { path: 'app-bpm-registro-pj/:susep/:cpfCnpj/:usuario/:etapa', component: BpmRegistroPjComponent},
    { path: 'app-bpm-contatos-pf/:susep/:cpfCnpj/:usuario/:etapa', component: BpmContatosPfComponent},
    { path: 'app-bpm-contatos-pj/:susep/:cpfCnpj/:usuario/:etapa', component: BpmContatosPjComponent},
    { path: 'app-bpm-documentos-pf/:susep/:cpfCnpj/:usuario/:etapa', component: BpmDocumentosPfComponent},
    { path: 'app-bpm-documentos-pj/:susep/:cpfCnpj/:usuario/:etapa', component: BpmDocumentosPjComponent},
    { path: 'app-tabs/:susep/:cpfCnpj/:usuario/:etapa', component: TabsComponent },
    { path: 'app-bpm/:susep/:cpfCnpj/:usuario/:etapa', component: BpmComponent},
    { path: 'app-bpm-pj/:susep/:cpfCnpj/:usuario/:etapa', component: BpmPjComponent},
    { path: '', redirectTo: 'app-bpm/:susep/:cpfCnpj/:usuario/:etapa', pathMatch: 'full' }
];