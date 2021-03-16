import { Request, Response, NextFunction } from "express";
import { collegeController } from '../controller/collegeController';


export class Routes {
    private college: collegeController = new collegeController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/college/:id').delete(this.college.GpDelete);
app.route('/college/get/search').get(this.college.GpSearch);
app.route('/college').put(this.college.GpUpdate);
app.route('/college/get/update').put(this.college.GpSearchForUpdate);
app.route('/college').get(this.college.GpGetAllValues);
app.route('/college').post(this.college.GpCreate);
     }

}