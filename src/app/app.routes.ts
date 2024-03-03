import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BoardsPageComponent } from './pages/boards-page/boards-page.component';

export const routes: Routes = [
    { path: 'sign-in', component: LoginPageComponent },
    { path: 'boards', component: BoardsPageComponent }
];
