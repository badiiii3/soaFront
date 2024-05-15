import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/model/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {
  user: Etudiant = { id: 0, nom: '', prenom: '', classe: '', reussite: false, nbAbsences: 0 };

  constructor(
    private route: ActivatedRoute,
    private etudiantService: EtudiantService
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   const userId = +params['id']; // Extract id from route parameter
    //   this.loadUser(userId);
    // });
  }

  // loadUser(userId: number): void {
  //   this.etudiantService.getUserById(userId).subscribe(user => {
  //     this.user = user;
  //   });
  // }

  onSubmit(): void {
    this.etudiantService.updateUser(this.user).subscribe(
      () => {
        console.log('User updated successfully');
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }
}
