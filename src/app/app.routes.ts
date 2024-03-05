import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BoardsPageComponent } from './pages/boards-page/boards-page.component';
import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

export const routes: Routes = [


    { path: 'sign-in', component: LoginPageComponent },
    { path: 'dashboard', component: DashboardPageComponent,children:[
        { path: 'boards', component: BoardsPageComponent }
    ] },


];
