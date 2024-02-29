import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { KeepComponent } from './components/keep/keep.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { ArchiveContainerComponent } from './components/archive-container/archive-container.component';
import { TrashContainerComponent } from './components/trash-container/trash-container.component';
import { NotecardComponent } from './components/notecard/notecard.component';
const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "keep",
    component: KeepComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "notes",
        component: NotesContainerComponent
      },
      {
        path: "archive",
        component: ArchiveContainerComponent
      },
      {
        path: "trash",
        component: TrashContainerComponent
      },
      {
        path: "notecard",
        component: NotecardComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }