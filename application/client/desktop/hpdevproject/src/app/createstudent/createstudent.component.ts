import { Component, OnInit } from '@angular/core';
import { CreatestudentService } from './createstudent.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.scss'],
})

export class CreatestudentComponent implements OnInit {
    departmentitemArray: any = [];
    collegeitemArray: any = [];
    placeitemArray: any = [];
    public student = {
        Name: '',
        Email: '',
        Department: '',
        College: '',
        Place: '',
    }

    constructor (
        private createstudentService: CreatestudentService,
    ) { }

    ngOnInit() {
    }
    departmentGpGetAllValues() {
        this.createstudentService.departmentGpGetAllValues().subscribe(data => {
            this.departmentitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    collegeGpGetAllValues() {
        this.createstudentService.collegeGpGetAllValues().subscribe(data => {
            this.collegeitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    placeGpGetAllValues() {
        this.createstudentService.placeGpGetAllValues().subscribe(data => {
            this.placeitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createstudentService.GpCreate(this.student).subscribe(data => {
            this.student.Name = ''
 	 	this.student.Email = ''
 	 	this.student.Department = ''
 	 	this.student.College = ''
 	 	this.student.Place = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}