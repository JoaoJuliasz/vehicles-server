import { Request, Response } from "express";
import VehiclesModel from "../vehicles.model";
import ICommand from "../types/ICommand";

export default class HttpCreateNewVehicle implements ICommand<void> {

    constructor(private params: { req: Request, res: Response }, private vehicleModel: VehiclesModel) { }


    async execute() {
        const { req, res } = this.params
        const vehicle = req.body
        const vehicleExists = await this.vehicleModel.checkIfVehicleExists(vehicle)
        if (vehicleExists) {
            return res.status(400).json({
                error: 'Vehicle with these values already exists!'
            })
        }
        await this.vehicleModel.addNewVehicle(vehicle)
        return res.status(201).json(vehicle)
    }

}