import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees = [
    { empId: '101', empName: 'Joe', empDept: 'General Mgmt Dept' },
    { empId: '102', empName: 'Alex', empDept: 'Marketing Dept' },
    { empId: '103', empName: 'Nathan', empDept: 'HR Dept' },
    { empId: '104', empName: 'Siya', empDept: 'Sales Dept' },
  ];

}
