import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditEtudiantComponent } from './components/edit-etudiant/edit-etudiant.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit-etudiant/:id', component: EditEtudiantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
