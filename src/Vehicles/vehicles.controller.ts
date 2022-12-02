import VehiclesModel from "./vehicles.model";
import { Request, Response } from 'express'

export default class VehicleController {

    protected vehicleModel: VehiclesModel = new VehiclesModel()

    constructor() {
        this.httpGetVehicles = this.httpGetVehicles.bind(this)
        this.httpCreateNewVehicle = this.httpCreateNewVehicle.bind(this)
    }

    async httpGetVehicles(req: Request, res: Response) {
        res.status(200).json(await this.vehicleModel.getVehicles())
    }

    async httpCreateNewVehicle(req: Request, res: Response) {
        const vehicle = req.body
        if (await this.vehicleModel.checkIfVehicleExists(vehicle)) {
            return res.status(400).json({
                error: 'This vehicle already exists'
            })
        }
        //TODO: need to add date before
        await this.vehicleModel.addNewVehicle(vehicle)
        return res.status(200).json(vehicle)
    }

}