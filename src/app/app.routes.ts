import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Form } from './form/form';

export const routes: Routes = [
    {
        path: 'home', component: Home
    },
    {
        path: 'form', component: Form
    },
    {
        path:'home',
        loadComponent:()=>import('./home/home').then(m=>m.Home)
    },
    {
        path:'',redirectTo:'home',pathMatch:'full'
    }
];
