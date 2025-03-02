import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent {
  collections = [
    { title: 'Books', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png' },
    { title: 'Magazines', imageUrl: 'https://cdn-icons-png.flaticon.com/512/4285/4285646.png' },
    { title: 'Newspapers', imageUrl: 'https://cdn-icons-png.flaticon.com/512/4727/4727463.png' },
    { title: 'CDs', imageUrl: 'https://cdn-icons-png.flaticon.com/512/888/888327.png' },
    { title: 'DVDs', imageUrl: 'https://cdn-icons-png.flaticon.com/512/888/888328.png' },
    { title: 'Journals', imageUrl: 'https://cdn-icons-png.flaticon.com/512/3143/3143460.png' }
  ];
}
