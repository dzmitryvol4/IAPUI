import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StoreComponent } from './store/store.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
      },
      {
        path: 'store',
        component: StoreComponent
      },
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash: false})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }