import { Request, Response } from "express";
import VehiclesModel from "../vehicles.model";
import ICommand from "../types/ICommand";

export default class HttpRemoveVehicle implements ICommand<void> {

    private vehicleModel: VehiclesModel = new VehiclesModel()

    constructor(private params: { req: Request, res: Response }) { }

    async execute() {
        const { req, res } = this.params
        const vehicleId = req.params._id
        const foundVehicle = await this.vehicleModel.existsVehicleWithId(vehicleId)
        if (!foundVehicle) {
            return res.status(404).json({
                error: "Vehicle with this id not exists!"
            })
        }
        await this.vehicleModel.removeVehicle(vehicleId)
        return res.status(200).json({
            message: 'Vehicle deleted!'
        })
    }

}