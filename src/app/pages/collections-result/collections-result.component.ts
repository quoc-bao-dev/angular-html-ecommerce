import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-collections-result',
  standalone: true,
  imports: [MatIconModule, NgFor],
  templateUrl: './collections-result.component.html',
  styleUrl: './collections-result.component.css'
})
export class CollectionsResultComponent {

}
