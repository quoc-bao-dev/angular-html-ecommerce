import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,  MatIconModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}

