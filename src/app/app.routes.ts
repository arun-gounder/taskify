import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BoardsPageComponent } from './pages/boards-page/boards-page.component';
import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

export const routes: Routes = [


    { path: 'sign-in', component: LoginPageComponent },
    { path: '', pathMatch: 'full', redirectTo: 'dashboard-layout' },
    { path: 'dashboard-layout', component: DashboardLayoutComponent,children:[
        { path: 'dashboard', component: DashboardPageComponent },
        { path: 'boards', component: BoardsPageComponent }
    ] },


];
