import { Request, Response } from 'express';
import { departmentService } from '../service/departmentService';
import { CustomLogger } from '../config/Logger'
let department = new departmentService();

export class departmentController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
department.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into departmentController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from departmentController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
department.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into departmentController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from departmentController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
department.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into departmentController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from departmentController.ts: GpUpdate');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
department.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into departmentController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from departmentController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
department.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into departmentController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from departmentController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
department.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into departmentController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from departmentController.ts: GpCreate');
    })}


}