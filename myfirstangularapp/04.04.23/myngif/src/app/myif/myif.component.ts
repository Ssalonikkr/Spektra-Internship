import { Component } from '@angular/core';

@Component({
  selector: 'app-myif',
  templateUrl: './myif.component.html',
  styleUrls: ['./myif.component.css']
})
export class MyifComponent {

  isValid: boolean = true;
  ChangeData(valid: boolean) {
    this.isValid = valid;
}

}
