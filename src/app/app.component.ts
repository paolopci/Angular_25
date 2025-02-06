import { AfterContentInit, Component, signal } from '@angular/core';


interface Iemployee {
    id: number;
    name: string;
    role: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements AfterContentInit {

    // updateClass = 'updateClass italicText upperCaseText';

    cardColor: string = 'lightColor';
    initialValue: string = 'New Value ...';
    user = {
        name: 'Paolo Paci'
    };

    dataFromParent = '';

    applyCardStyle = {
        'font-size': '25px',
        'font-style': 'italic',
        'font-weight': 'bold'
    }

    employees = signal<Iemployee[]>([
        { id: 1, name: 'Paolo', role: 'Admin' },
        { id: 2, name: 'Carla', role: 'User' },
        { id: 3, name: 'Massimo', role: 'Developer' },
        { id: 4, name: 'Franco', role: 'User' },
        { id: 5, name: 'Elisa', role: 'Operator' },
        { id: 6, name: 'Ada', role: 'Developer' },
        { id: 7, name: 'Celeste', role: 'Marketing' },
        { id: 8, name: 'Vittorio', role: 'Operator' },
        { id: 9, name: 'Venerina', role: 'operator' },
        { id: 10, name: 'Maria', role: 'Marketing' },
    ]);

    changeColor() {
        if (this.cardColor === 'lightColor') {
            this.cardColor = 'darkColor';
        } else {
            this.cardColor = 'lightColor';
        }
    }

    updateValue() {
        this.initialValue = 'Update Initial Value ...#';
    }

    updateUser() {
        this.user.name = 'Paolo Paci - Via del Canarino, 5 61122 Pesaro';
    }

    ngAfterContentInit(): void {
        // console.log('ngAfterContentInit was invoked...');
    }

    sendDataToChild() {
        let random = Math.floor(Math.random() * 10);
        this.dataFromParent = 'Random Number: ' + random;
    }


}
