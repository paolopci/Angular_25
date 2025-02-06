import {Component} from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrl: './users.component.css'
})
export class UsersComponent {

    inputValue1 = "Paolo Paci";
    isDisabled = false;

    inputValue2: string = "2rem";
    inputValue3: string = "Venerina Piergiovanni";

    imageValue = "Sunflower_Metalhead64.jpg";

}
