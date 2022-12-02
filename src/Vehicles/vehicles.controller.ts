import VehiclesModel from "./vehicles.model";
import { Request, Response } from 'express'

export default class VehicleController {

    protected vehicleModel: VehiclesModel = new VehiclesModel()

    constructor() {
        this.httpGetVehicles = this.httpGetVehicles.bind(this)
    }

    public httpGetVehicles(req: Request, res: Response) {
        res.status(200).json(this.vehicleModel.getVehicles())
    }

}