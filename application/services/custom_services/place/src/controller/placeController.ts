import { Request, Response } from 'express';
import { placeService } from '../service/placeService';
import { CustomLogger } from '../config/Logger'
let place = new placeService();

export class placeController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
place.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into placeController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from placeController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
place.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into placeController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from placeController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
place.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into placeController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from placeController.ts: GpUpdate');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
place.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into placeController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from placeController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
place.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into placeController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from placeController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
place.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into placeController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from placeController.ts: GpCreate');
    })}


}