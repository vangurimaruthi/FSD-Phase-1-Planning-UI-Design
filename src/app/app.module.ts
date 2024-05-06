import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CmeetingsComponent } from './cmeetings/cmeetings.component';
import { VmeetingsComponent } from './vmeetings/vmeetings.component';
import { EmeetingsComponent } from './emeetings/emeetings.component';

const routes:Routes=[
  {path:'',redirectTo:'/add',pathMatch:'full'},
  {path:'add',component:AddClientComponent},
  {path:'view',component:ViewClientComponent},
  {path:'edit/:id',component:EditClientComponent}
  ]
  
@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ViewClientComponent,
    EditClientComponent,
    CmeetingsComponent,
    VmeetingsComponent,
    EmeetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
