import { Component, OnInit } from '@angular/core';
import { CreatecollegeService } from './createcollege.service';

@Component({
  selector: 'app-createcollege',
  templateUrl: './createcollege.component.html',
  styleUrls: ['./createcollege.component.scss'],
})

export class CreatecollegeComponent implements OnInit {
    public college = {
        collegename: '',
    }

    constructor (
        private createcollegeService: CreatecollegeService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createcollegeService.GpCreate(this.college).subscribe(data => {
            this.college.collegename = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}