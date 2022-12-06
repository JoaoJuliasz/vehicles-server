import { Request, Response } from "express";
import VehiclesModel from "../vehicles.model";
import ICommand from "../types/ICommand";

export default class HttpGetVehicleByFilter implements ICommand<void> {

    private vehicleModel: VehiclesModel = new VehiclesModel()

    constructor(private params: { req: Request<{}, {}, {}, { q: string }>, res: Response }) { }

    async execute() {
        const { req, res } = this.params
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

}