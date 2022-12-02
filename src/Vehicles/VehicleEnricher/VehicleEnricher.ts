import mongoose from "mongoose";
import ICommand from "../types/ICommand";
import { BodyVehicle, Vehicle } from "../types/types";

export default class VehicleEnricher implements ICommand<Vehicle> {

    constructor(private vehicle: BodyVehicle) { }

    execute() {
        const newVehicle = Object.assign(this.vehicle, {
            created: new Date(),
            updated: new Date(),
            _id: new mongoose.Types.ObjectId()
        })

        return newVehicle
    }
}