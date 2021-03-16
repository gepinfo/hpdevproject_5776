import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class CreatestudentService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(student): Observable<any> {
        return this.http.post(this.sharedService.DESKTOP_API + '/student', student);
    }
    departmentGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/department');
    }
    collegeGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/college');
    }
    placeGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/place');
    }
}