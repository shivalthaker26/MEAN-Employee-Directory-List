import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: any;
  displayedColumns = ['imgUrl', 'name', 'title', 'position', 'date_joined'];
  dataSource = new EmployeeDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getEmployees()
      .subscribe(res => {
        console.log(res);
        this.employees = res;
      }, err => {
        console.log(err);
      });
  }
}

export class EmployeeDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getEmployees();
  }

  disconnect() {

  }
}
