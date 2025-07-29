import { Component } from '@angular/core';
import { ModalComponent } from "../../../shared/components/modal/modal.component";

@Component({
  selector: 'app-generic-modal-demo',
  standalone: true,
  templateUrl: './generic-modal-demo.component.html',
  styleUrls: ['./generic-modal-demo.component.css'],
  imports: [ModalComponent]
})
export class GenericModalDemoComponent {

  constructor() { }

  isModal1 = false;
  isModal2 = false;
  isModal3 = false;
  isModal4 = false;

}
