import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { Base1LayoutComponent } from './layout/base1-layout/base1-layout.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'layout/1', component: Base1LayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
