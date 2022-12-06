import { Request, Response } from "express";
import ICommand from "../types/ICommand";
import VehiclesModel from "../vehicles.model";

export default class HttpUpdateVehicle implements ICommand<void> {

    private vehicleModel: VehiclesModel = new VehiclesModel()

    constructor(private params: { req: Request, res: Response }) { }

    async execute() {
        const { req, res } = this.params
        const vehicleId = req.params._id
        const foundVehicle = await this.vehicleModel.existsVehicleWithId(vehicleId)
        const valuesToUpdate = req.body
        if (!foundVehicle) {
            return res.status(404).json({
                error: "Vehicle with this id not exists!"
            })
        }
        const updatedVehicle = await this.vehicleModel.updateVehicle(vehicleId, valuesToUpdate)
        return res.status(200).json(updatedVehicle)
    }

}