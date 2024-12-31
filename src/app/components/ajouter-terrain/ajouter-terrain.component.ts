import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-ajouter-terrain',
  templateUrl: './ajouter-terrain.component.html',
  styleUrls: ['./ajouter-terrain.component.css']
})
export class AjouterTerrainComponent implements OnInit {
  terrainForm: FormGroup;

  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder, 
    private reservationService: AdminService
  ) {
    this.terrainForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      surface: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]]
    });
  }

  ngOnInit(): void {
  }

  get f() {
    return this.terrainForm.controls;
  }

  onSubmit(): void {
    if (this.terrainForm.valid) {
      this.loading = true;
      this.reservationService.addTerrain(this.terrainForm.value).subscribe(
        (response) => {
          console.log('Terrain added successfully', response);
          this.loading = false;
        },
        (error) => {
          console.error('Error adding terrain:', error);
          this.errorMessage = 'Failed to add terrain';
          this.loading = false;
        }
      );
    } else {
      this.errorMessage = 'Please fill out the form correctly';
    }
  }
}
