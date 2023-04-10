import { Component } from '@angular/core';

@Component({
  selector: 'app-myswt',
  templateUrl: './myswt.component.html',
  styleUrls: ['./myswt.component.css']
})
export class MyswtComponent {

  public dropDownValue = "";
      SetDropDownValue(drpValue : any) {
        this.dropDownValue = drpValue.target.value;
    }
}


