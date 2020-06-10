import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthGuardService} from './services/auth-guard.service';
import { IndexComponent } from './index/index.component';
import { TestAppendComponent } from './test-append/test-append.component';
import { DeliveryanswerComponent } from './deliveryanswer/deliveryanswer.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'dashboard/deliveries', component: DeliveriesComponent, canActivate: [AuthGuardService] },
  { path: 'deliveryanswer', component: DeliveryanswerComponent, canActivate: [AuthGuardService] },
  { path: 'delivery-list', component: DeliveryListComponent, canActivate: [AuthGuardService] },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'test', component: TestAppendComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
