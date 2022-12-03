import VehiclesModel from "./vehicles.model";
import { Request, Response } from 'express'

export default class VehicleController {

    protected vehicleModel: VehiclesModel = new VehiclesModel()

    constructor() {
        this.httpGetVehicle = this.httpGetVehicle.bind(this)
        this.httpGetVehicles = this.httpGetVehicles.bind(this)
        this.httpGetVehiclesByFilter = this.httpGetVehiclesByFilter.bind(this)
        this.httpCreateNewVehicle = this.httpCreateNewVehicle.bind(this)
    }

    async httpGetVehicles(req: Request, res: Response) {
        res.status(200).json(await this.vehicleModel.getVehicles())
    }

    async httpGetVehicle(req: Request, res: Response) {
        const vehicleId = req.params._id
        const foundVehicle = await this.vehicleModel.existsVehicleWithId(vehicleId)
        if (!foundVehicle) {
            return res.status(404).json({
                error: 'Vehicle not found!'
            })
        }

        return res.status(200).json(foundVehicle)
    }

    async httpGetVehiclesByFilter(req: Request<{}, {}, {}, { q: string }>, res: Response) {
        const { query } = req
        const filterValue = query.q
        const foundVehicles = await this.vehicleModel.getFilterdVehicles(filterValue)
        if (foundVehicles.length === 0) {
            return res.status(404).json({
                message: "No vehicles found!"
            })
        }

        return res.status(200).json(foundVehicles)
    }

    async httpCreateNewVehicle(req: Request, res: Response) {
        const vehicle = req.body
        if (await this.vehicleModel.checkIfVehicleExists(vehicle)) {
            return res.status(400).json({
                error: 'Vehicle with these values already exists!'
            })
        }
        await this.vehicleModel.addNewVehicle(vehicle)
        return res.status(200).json(vehicle)
    }

}