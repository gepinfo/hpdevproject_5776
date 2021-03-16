import { Request, Response, NextFunction } from "express";
import { placeController } from '../controller/placeController';


export class Routes {
    private place: placeController = new placeController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/place/:id').delete(this.place.GpDelete);
app.route('/place/get/search').get(this.place.GpSearch);
app.route('/place').put(this.place.GpUpdate);
app.route('/place/get/update').put(this.place.GpSearchForUpdate);
app.route('/place').get(this.place.GpGetAllValues);
app.route('/place').post(this.place.GpCreate);
     }

}