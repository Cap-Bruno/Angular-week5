import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/pages/menu/menu.component';
import { MyInfoComponent } from './components/pages/my-info/my-info.component';
import { SingUpComponent } from './components/pages/sing-up/sing-up.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'my-info', component: MyInfoComponent },
  { path: 'sign-up', component: SingUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
