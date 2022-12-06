import { Request, Response } from "express";
import VehiclesModel from "../vehicles.model";
import ICommand from "../types/ICommand";

export default class HttpUpdateVehicleValues implements ICommand<void> {

    private vehicleModel: VehiclesModel = new VehiclesModel()

    constructor(private params: { req: Request, res: Response }) { }

    async execute() {
        const { req, res } = this.params
        const vehicleId = req.params._id
        const foundVehicle = await this.vehicleModel.existsVehicleWithId(vehicleId)
        const vehicle = req.body
        if (!foundVehicle) {
            return res.status(404).json({
                error: "Vehicle with this id not exists!"
            })
        }
        const updateStatus = await this.vehicleModel.updateVehicle(vehicleId, vehicle)
        if (typeof updateStatus === "string") {
            return res.status(400).send({
                err: updateStatus
            })
        }
        return res.status(200).json(updateStatus)
    }

}