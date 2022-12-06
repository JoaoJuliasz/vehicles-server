import vehicleDatabase from '../../vehicles.mongo';

import ICommand from "../../types/ICommand";
import { UpdateVehicleValues } from "../../types/types";

export default class ValidateVehicleChanges implements ICommand<Promise<string>> {

    constructor(private vehicle: UpdateVehicleValues) { }

    execute() {
        return new Promise<string>((resolve, reject) => {
            const vehicleToUpdate = new vehicleDatabase(this.vehicle)
            vehicleToUpdate.validate((err) => {
                if (err && err.message) {
                    reject(err.message)
                }
                resolve("")
            })
        })
    }

}