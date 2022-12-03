import ICommand from "../types/ICommand";
import { Vehicle } from "../types/types";

import vehicleDatabase from '../vehicles.mongo';

export default class ExistsVehicleWithId implements ICommand<Promise<Vehicle | null>>{

    constructor(private vehicleId: string) { }

    async execute() {
        return await vehicleDatabase.findOne({ _id: this.vehicleId })
    }

}