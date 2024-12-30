import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {
  terrains: any[] = []; // Array to store the list of terrains
  loading: boolean = false; // Flag to show loading state
  error: string = ''; // For displaying errors if the request fails

  constructor(private terrainService: AdminService) {}

  ngOnInit(): void {
    this.fetchTerrains();
  }

  // Method to fetch terrains from the service
  fetchTerrains(): void {
    this.loading = true;
    this.terrainService.getTerrains().subscribe(
      (data) => {
        this.terrains = data; // Store the fetched data in the terrains array
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching terrains:', error);
        this.error = 'Failed to load terrains'; // Set an error message
        this.loading = false;
      }
    );
  }
}
