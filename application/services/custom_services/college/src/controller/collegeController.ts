import { Request, Response } from 'express';
import { collegeService } from '../service/collegeService';
import { CustomLogger } from '../config/Logger'
let college = new collegeService();

export class collegeController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
college.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into collegeController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from collegeController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
college.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into collegeController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from collegeController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
college.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into collegeController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from collegeController.ts: GpUpdate');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
college.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into collegeController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from collegeController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
college.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into collegeController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from collegeController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
college.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into collegeController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from collegeController.ts: GpCreate');
    })}


}