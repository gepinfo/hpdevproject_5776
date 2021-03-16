import { Request, Response, NextFunction } from "express";
import { departmentController } from '../controller/departmentController';


export class Routes {
    private department: departmentController = new departmentController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/department/:id').delete(this.department.GpDelete);
app.route('/department/get/search').get(this.department.GpSearch);
app.route('/department').put(this.department.GpUpdate);
app.route('/department/get/update').put(this.department.GpSearchForUpdate);
app.route('/department').get(this.department.GpGetAllValues);
app.route('/department').post(this.department.GpCreate);
     }

}