import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimaryButtonComponent } from '../Buttons/primary/primary.component';
import { OutlinePrimaryButtonComponent } from '../Buttons/outline-primary/outline-primary.component';

@Component({
  selector: 'app-landing-navbar',
  standalone: true,
  imports: [RouterModule,PrimaryButtonComponent,OutlinePrimaryButtonComponent],
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.css']
})
export class LandingNavbarComponent {

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
