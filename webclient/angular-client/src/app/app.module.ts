import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule }    from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LaboratoryresultdetailComponent } from './laboratoryresultdetail/laboratoryresultdetail.component';
import { LaboratoryresultlistComponent } from './laboratoryresultlist/laboratoryresultlist.component';
import { AppRoutingModule } from './/app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

import { TokenInterceptor } from './keycloak/token-interceptor';
import { AuthService } from './keycloak/auth.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { LaboratoryresultComponent } from './laboratoryresult/laboratoryresult.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LaboratoryresultdetailComponent,
    LaboratoryresultlistComponent,
    WelcomeComponent,
    UserProfileComponent,
    PatientListComponent,
    PatientDetailComponent,
    LaboratoryresultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    AuthService,
    {provide: APP_INITIALIZER, useFactory: kcFactory, deps: [AuthService], multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function kcFactory(authService: AuthService) {
  return () => authService.init();
}