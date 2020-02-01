import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employeeForm: FormGroup;
  name:string='';
  title:string='';
  position:string='';
  date_joined:string='';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'title' : [null, Validators.required],
      'position' : [null, Validators.required],
      'date_joined' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.postEmployee(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/employee-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
