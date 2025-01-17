import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage/manage.component';
import { UploadsComponent } from './uploads/uploads.component';
import { AngularFireAuthModule, } from '@angular/fire/compat/auth';
import { redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo('/')

const routes: Routes = [
  {
    path: 'manage',
    component: ManageComponent,
    data: {
      authOnly: true,
      authGuardPip: redirectUnauthorizedToHome
    },
    canActivate: [AngularFireAuthModule]
  },
  {
    path: 'upload',
    component: UploadsComponent,
    data: {
      authOnly: true,
      authGuardPip: redirectUnauthorizedToHome
    },
    canActivate: [AngularFireAuthModule]
  },
  {
    path: 'manage-clips',
    redirectTo: 'manage'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
