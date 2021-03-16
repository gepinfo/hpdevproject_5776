import { Request, Response } from 'express';
import { studentService } from '../service/studentService';
import { CustomLogger } from '../config/Logger'
let student = new studentService();

export class studentController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
student.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
student.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
student.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentController.ts: GpUpdate');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
student.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
student.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
student.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentController.ts: GpCreate');
    })}


}