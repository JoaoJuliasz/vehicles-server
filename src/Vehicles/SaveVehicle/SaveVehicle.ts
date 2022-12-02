import ICommand from "../types/ICommand";
import { BodyVehicle } from "../types/types";
import vehiclesDatabase from '../vehicles.mongo'

export default class SaveVehicle implements ICommand<void> {

    constructor(private vehicle: BodyVehicle) { }

    async execute() {
        await vehiclesDatabase.findOneAndUpdate({
            _id: this.vehicle._id
        }, this.vehicle, {
            upsert: true
        })
    }

}