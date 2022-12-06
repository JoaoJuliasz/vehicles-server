import { Request, Response } from "express";
import VehiclesModel from "../vehicles.model";
import ICommand from "../types/ICommand";

export default class HttpCreateNewVehicle implements ICommand<void> {

    private vehicleModel: VehiclesModel = new VehiclesModel()

    constructor(private params: { req: Request, res: Response }) { }

    async execute() {
        const { req, res } = this.params
        const vehicle = req.body
        const vehicleExists = await this.vehicleModel.checkIfVehicleExists(vehicle)
        if (vehicleExists) {
            return res.status(400).json({
                error: 'Vehicle with these values already exists!'
            })
        }
        const vehicleStatus = await this.vehicleModel.addNewVehicle(vehicle)
        if (typeof vehicleStatus === "string") {
            return res.status(400).send({
                err: vehicleStatus
            })
        }
        return res.status(201).json(vehicleStatus)
    }

}