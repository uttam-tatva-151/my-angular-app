import { Component, OnInit } from '@angular/core';
import { PrimaryButtonComponent } from '../../../shared/components/Buttons/primary/primary.component';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [PrimaryButtonComponent],
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
