import { Component } from '@angular/core';
import { NavbarComponent } from '../../units/navbar/navbar.component';
import { CarouselComponent } from '../../units/carousel/carousel.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
