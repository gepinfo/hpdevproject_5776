import { Component, OnInit } from '@angular/core';
import { GetallstudentService } from './getallstudent.service';

@Component({
  selector: 'app-getallstudent',
  templateUrl: './getallstudent.component.html',
  styleUrls: ['./getallstudent.component.scss'],
})

export class GetallstudentComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'Name'  },{ headerName: 'Email', field: 'Email'  },{ headerName: 'Department', field: 'Department'  },{ headerName: 'College', field: 'College'  },{ headerName: 'Place', field: 'Place'  },];
    public student = {
        Name: '',
        Email: '',
        Department: '',
        College: '',
        Place: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private getallstudentService: GetallstudentService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallstudentService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}