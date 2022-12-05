import { Request, Response } from "express";
import VehiclesModel from "../vehicles.model";
import ICommand from "../types/ICommand";

export default class HttpUpdateVehicleValues implements ICommand<void> {

    constructor(private params: { req: Request, res: Response }, private vehicleModel: VehiclesModel) { }

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
        if (!this.vehicleModel.validateVehicleNotEmpty(vehicle)) {
            return res.status(400).json({
                err: 'Missing vehicle property!'
            })
        }
        if (!this.vehicleModel.validateVehicleTypes(vehicle)) {
            return res.status(400).json({
                err: 'Invalid vehicle types!'
            })
        }
        const updatedVehicle = await this.vehicleModel.updateVehicle(vehicleId, vehicle)
        return res.status(200).json(updatedVehicle)
    }

}