import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employeeForm: FormGroup;
  id:string = '';
  name:string='';
  title:string='';
  position:string='';
  date_joined:string='';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getEmployee(this.route.snapshot.params['id']);
    this.employeeForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'title' : [null, Validators.required],
      'position' : [null, Validators.required],
      'date_joined' : [null, Validators.required]
    });
  }

  getEmployee(id) {
    this.api.getEmployee(id).subscribe(data => {
      this.id = data._id;
      this.employeeForm.setValue({
        name: data.name,
        title: data.title,
        position: data.position,
        date_joined: data.date_joined
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.updateEmployee(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/employee-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  employeeDetails() {
    this.router.navigate(['/employee-details', this.id]);
  }
}
