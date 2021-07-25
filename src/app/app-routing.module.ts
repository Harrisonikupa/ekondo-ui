import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'register',
    loadChildren: () => RegisterModule,
    // resolve: {
    //   securityQuestions: SecurityQuestionsResolver
    // },
    data: {
      showHeader: false,
      showFooter: false,
      showSidebar: false
    }
  },
  {
    path: 'login',
    loadChildren: () => LoginModule,
    data: {
      showHeader: false,
      showFooter: false,
      showSidebar: false
    }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'pay-bills',
    loadChildren: () => import('./pages/pay-bills/pay-bills.module').then(m => m.PayBillsModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'transfer-money',
    loadChildren: () => import('./pages/fund-transfer/fund-transfer.module').then(m => m.FundTransferModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'cards',
    loadChildren: () => import('./pages/cards/cards.module').then(m => m.CardsModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'loans',
    loadChildren: () => import('./pages/loans/loans.module').then(m => m.LoansModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'savings',
    loadChildren: () => import('./pages/savings/savings.module').then(m => m.SavingsModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'beneficiaries',
    loadChildren: () => import('./pages/beneficiaries/beneficiaries.module').then(m => m.BeneficiariesModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'rewards',
    loadChildren: () => import('./pages/rewards/rewards.module').then(m => m.RewardsModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'investments',
    loadChildren: () => import('./pages/investments/investments.module').then(m => m.InvestmentsModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'security-settings',
    loadChildren: () => import('./pages/security-settings/security-settings.module').then(m => m.SecuritySettingsModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'transaction-history',
    loadChildren: () => import('./pages/transaction-history/transaction-history.module').then(m => m.TransactionHistoryModule),
    // canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
