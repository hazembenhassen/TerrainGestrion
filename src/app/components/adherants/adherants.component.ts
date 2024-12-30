import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-adherants',
  templateUrl: './adherants.component.html',
  styleUrls: ['./adherants.component.css']
})
export class AdherantsComponent implements OnInit {
  adherents: any[] = []; 
  loading: boolean = false; 
  error: string = ''; 
  constructor(private adherantService: AdminService) {}
  ngOnInit(): void {
    this.fetchAdherents();
  }

  fetchAdherents(): void {
    this.loading = true;
    this.adherantService.getAdherents().subscribe(
      (data) => {
        this.adherents = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching adherents:', error);
        this.error = 'Failed to load adherents'; 
        this.loading = false;
      }
    );
  }
}
