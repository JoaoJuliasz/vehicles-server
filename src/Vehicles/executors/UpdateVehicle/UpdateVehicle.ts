import ICommand from "../../types/ICommand";
import { Vehicle, UpdateVehicleValues } from "../../types/types";
import vehicleDatabase from '../../vehicles.mongo';

export default class UpdateVehicle implements ICommand<Promise<Vehicle>> {
    constructor(private vehicleId: string, private valuesToUpdate: UpdateVehicleValues) { }

    async execute() {
        let oi!: Vehicle;
        return await vehicleDatabase.findOneAndUpdate({ _id: this.vehicleId },
            this.valuesToUpdate,
            { upsert: true, new: true, fields: '-__v', returnOriginal: false })
    }

}