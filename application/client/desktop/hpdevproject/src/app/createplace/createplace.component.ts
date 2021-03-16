import { Component, OnInit } from '@angular/core';
import { CreateplaceService } from './createplace.service';

@Component({
  selector: 'app-createplace',
  templateUrl: './createplace.component.html',
  styleUrls: ['./createplace.component.scss'],
})

export class CreateplaceComponent implements OnInit {
    public place = {
        placename: '',
    }

    constructor (
        private createplaceService: CreateplaceService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createplaceService.GpCreate(this.place).subscribe(data => {
            this.place.placename = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}