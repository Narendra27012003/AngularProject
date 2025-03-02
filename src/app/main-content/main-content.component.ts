import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule], // ✅ Required for *ngFor
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent {
  
  newArrivals: any[] = [];

  // ✅ Fix: Add missing dashboardStats
  dashboardStats = [
    { title: 'Issued Books', count: 1, imageUrl: 'https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200' },
    { title: 'Overdue Items', count: 0, imageUrl: 'https://media.istockphoto.com/id/904475088/vector/stopwatch-icon.jpg?s=1024x1024&w=is&k=20&c=-RjNMC1bXbji7Jdb_Qsn6r9jcu6ceLlI85sst7E9lwM=' },
    { title: 'Saved Selections', count: 3, imageUrl: 'https://img.freepik.com/free-psd/3d-rendering-social-media-icon_23-2151413529.jpg?t=st=1740925221~exp=1740928821~hmac=9d37680c41331c92346e858c71f1f00a910091947d7580f675dd7b17607fe245&w=900' },
    { title: 'Item Reservations', count: 0, imageUrl: 'https://www.marketsquarejewelers.com/cdn/shop/files/Reserved_27779d11-ab27-4102-a695-09b0d0f1ad40_5000x.jpg?v=1739293659' }
  ];

  // ✅ Fix: Add missing upcomingEvents
  upcomingEvents = [
    { title: 'University Event', date: '24 Jul, 2024', dayTime: 'Mon, 10:00 AM', color: 'blue' },
    { title: 'Workshop', date: '25 Jul, 2024', dayTime: 'Tue, 3:00 PM', color: 'orange' },
    { title: 'Seminar', date: '26 Jul, 2024', dayTime: 'Wed, 10:00 AM', color: 'purple' },
    { title: 'Workshop', date: '27 Jul, 2024', dayTime: 'Thu, 11:00 AM', color: 'yellow' }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('/assets/new-arrivals.json').subscribe({
      next: (data) => {
        this.newArrivals = data;
      },
      error: (err) => {
        console.error('Error fetching new arrivals:', err);
      }
    });
  }
}
