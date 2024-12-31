import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajouter-adherant',
  templateUrl: './ajouter-adherant.component.html',
  styleUrls: ['./ajouter-adherant.component.css']
})

export class AjouterAdherantComponent implements OnInit {
  adherantForm: FormGroup;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService ,
    private router: Router

  ) {
    this.adherantForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.adherantForm.controls;
  }

  onSubmit(): void {
    if (this.adherantForm.valid) {
      this.loading = true;
      this.adminService.addAdherant(this.adherantForm.value).subscribe(
        (response) => {
          console.log('Adherent added successfully', response);
          this.loading = false;
          this.router.navigate(['/adherants']);
        },
        (error) => {
          console.error('Error adding adherent:', error);
          this.errorMessage = 'Failed to add adherent';
          this.loading = false;
        }
      );
    } else {
      this.errorMessage = 'Please fill out the form correctly';
    }
  }
}
