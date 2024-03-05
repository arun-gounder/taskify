import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BoardsPageComponent } from './pages/boards-page/boards-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

export const routes: Routes = [


    { path: 'sign-in', component: LoginPageComponent },
    { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
    {
        path: 'dashboard', component: DashboardPageComponent, children: [
            { path: 'boards', component: BoardsPageComponent }
        ]
    },


];
