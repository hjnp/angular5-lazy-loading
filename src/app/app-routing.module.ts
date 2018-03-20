import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';

const routes: Routes = [{
  path: '',
  component: FirstComponent,
  pathMatch: 'full'
}, {
  path: 'lazy',
  loadChildren: 'app/lazy/lazy.module#LazyModule'
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: Boolean(history.pushState) === true,
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
