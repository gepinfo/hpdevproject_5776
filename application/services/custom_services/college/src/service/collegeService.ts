import { Request, Response } from 'express';
import {collegeDao} from '../dao/collegeDao';
import { CustomLogger } from '../config/Logger'
let college = new collegeDao();

export class collegeService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into collegeService.ts: GpDelete')
     const  collegeId = req.params.id;
     college.GpDelete(collegeId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from collegeService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into collegeService.ts: GpSearch')
     const  collegeData = req.query;
     college.GpSearch(collegeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from collegeService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into collegeService.ts: GpUpdate')
     const  collegeData = req.body;
     college.GpUpdate(collegeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from collegeService.ts: GpUpdate')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into collegeService.ts: GpSearchForUpdate')
     const  collegeData = req.body;
     college.GpSearchForUpdate(collegeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from collegeService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into collegeService.ts: GpGetAllValues')
     
     college.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from collegeService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into collegeService.ts: GpCreate')
     const  collegeData = req.body;
     college.GpCreate(collegeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from collegeService.ts: GpCreate')
         callback(response);
         });
    }


}