import { Request, Response } from 'express';
import {studentDao} from '../dao/studentDao';
import { CustomLogger } from '../config/Logger'
let student = new studentDao();

export class studentService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentService.ts: GpDelete')
     const  studentId = req.params.id;
     student.GpDelete(studentId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentService.ts: GpSearch')
     const  studentData = req.query;
     student.GpSearch(studentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentService.ts: GpUpdate')
     const  studentData = req.body;
     student.GpUpdate(studentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentService.ts: GpUpdate')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentService.ts: GpSearchForUpdate')
     const  studentData = req.body;
     student.GpSearchForUpdate(studentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentService.ts: GpGetAllValues')
     
     student.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentService.ts: GpCreate')
     const  studentData = req.body;
     student.GpCreate(studentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentService.ts: GpCreate')
         callback(response);
         });
    }


}