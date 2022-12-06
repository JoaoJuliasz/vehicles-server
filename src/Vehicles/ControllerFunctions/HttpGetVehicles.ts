import { Response } from "express";
import ICommand from "../types/ICommand";
import VehiclesModel from "../vehicles.model";

export default class HttpGetVehicles implements ICommand<void> {

    private vehicleModel: VehiclesModel = new VehiclesModel()

    constructor(private res: Response) { }

    async execute() {
        this.res.status(200).json(await this.vehicleModel.getVehicles())
    }

}