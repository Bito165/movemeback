import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/services/guards/auth/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/auth/auth.module').then(m=>m.AuthModule)},
  {path: 'app', loadChildren: () => import('./modules/main/main.module').then(m=>m.MainModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
