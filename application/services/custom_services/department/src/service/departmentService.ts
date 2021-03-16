import { Request, Response } from 'express';
import {departmentDao} from '../dao/departmentDao';
import { CustomLogger } from '../config/Logger'
let department = new departmentDao();

export class departmentService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into departmentService.ts: GpDelete')
     const  departmentId = req.params.id;
     department.GpDelete(departmentId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from departmentService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into departmentService.ts: GpSearch')
     const  departmentData = req.query;
     department.GpSearch(departmentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from departmentService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into departmentService.ts: GpUpdate')
     const  departmentData = req.body;
     department.GpUpdate(departmentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from departmentService.ts: GpUpdate')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into departmentService.ts: GpSearchForUpdate')
     const  departmentData = req.body;
     department.GpSearchForUpdate(departmentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from departmentService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into departmentService.ts: GpGetAllValues')
     
     department.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from departmentService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into departmentService.ts: GpCreate')
     const  departmentData = req.body;
     department.GpCreate(departmentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from departmentService.ts: GpCreate')
         callback(response);
         });
    }


}