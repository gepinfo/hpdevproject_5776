import { Component, OnInit } from '@angular/core';
import { CreatedepartmentService } from './createdepartment.service';

@Component({
  selector: 'app-createdepartment',
  templateUrl: './createdepartment.component.html',
  styleUrls: ['./createdepartment.component.scss'],
})

export class CreatedepartmentComponent implements OnInit {
    public department = {
        departmentname: '',
    }

    constructor (
        private createdepartmentService: CreatedepartmentService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createdepartmentService.GpCreate(this.department).subscribe(data => {
            this.department.departmentname = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}