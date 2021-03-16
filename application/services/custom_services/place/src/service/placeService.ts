import { Request, Response } from 'express';
import {placeDao} from '../dao/placeDao';
import { CustomLogger } from '../config/Logger'
let place = new placeDao();

export class placeService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into placeService.ts: GpDelete')
     const  placeId = req.params.id;
     place.GpDelete(placeId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from placeService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into placeService.ts: GpSearch')
     const  placeData = req.query;
     place.GpSearch(placeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from placeService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into placeService.ts: GpUpdate')
     const  placeData = req.body;
     place.GpUpdate(placeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from placeService.ts: GpUpdate')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into placeService.ts: GpSearchForUpdate')
     const  placeData = req.body;
     place.GpSearchForUpdate(placeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from placeService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into placeService.ts: GpGetAllValues')
     
     place.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from placeService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into placeService.ts: GpCreate')
     const  placeData = req.body;
     place.GpCreate(placeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from placeService.ts: GpCreate')
         callback(response);
         });
    }


}