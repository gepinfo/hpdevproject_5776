import { Request, Response, NextFunction } from "express";
import { studentController } from '../controller/studentController';


export class Routes {
    private student: studentController = new studentController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/student/:id').delete(this.student.GpDelete);
app.route('/student/get/search').get(this.student.GpSearch);
app.route('/student').put(this.student.GpUpdate);
app.route('/student/get/update').put(this.student.GpSearchForUpdate);
app.route('/student').get(this.student.GpGetAllValues);
app.route('/student').post(this.student.GpCreate);
     }

}