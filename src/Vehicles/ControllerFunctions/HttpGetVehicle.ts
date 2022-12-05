import { Request, Response } from "express";
import ICommand from "../types/ICommand";
import VehiclesModel from "../vehicles.model";

export default class HttpGetVehicle implements ICommand<void> {

    constructor(private params: { req: Request, res: Response }, private vehicleModel: VehiclesModel) { }

    async execute() {
        const { req, res } = this.params
        const vehicleId = req.params._id
        const foundVehicle = await this.vehicleModel.existsVehicleWithId(vehicleId)
        if (!foundVehicle) {
            return res.status(404).json({
                error: 'Vehicle not found!'
            })
        }

        return res.status(200).json(foundVehicle)
    }

}