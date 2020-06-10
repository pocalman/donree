import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuardService} from './services/auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthService } from "./services/auth.service";
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { AgmCoreModule } from '@agm/core';
import { IndexComponent } from './index/index.component';
import { TestAppendComponent } from './test-append/test-append.component';
import { DeliveryanswerComponent } from './deliveryanswer/deliveryanswer.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    DeliveriesComponent,
    DeliveryListComponent,
    IndexComponent,
    TestAppendComponent,
    DeliveryanswerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDs4raPkt07IPx3W6aS6BHIIop8dSoFpfA',
      libraries: ['places']
    })
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
