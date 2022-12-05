import ICommand from "../../types/ICommand";
import { Vehicle, UpdateVehicleValues } from "../../types/types";
import vehicleDatabase from '../../vehicles.mongo';

export default class UpdateVehicle implements ICommand<Promise<Vehicle>> {

    protected updatedVehicle!: Vehicle
    constructor(private vehicleId: string, private valuesToUpdate: UpdateVehicleValues) { }

    async execute() {
        const update = Object.assign(this.valuesToUpdate, {
            updated: new Date()
        })
        console.log(update)
        await vehicleDatabase.findOneAndUpdate({ _id: this.vehicleId }, update, { upsert: true, new: true, fields: '-__v' }, (err, doc) => {
            if (err) {
                console.log(`An error occurred ${err}`)
            }
            this.updatedVehicle = doc
        }).clone()
        return this.updatedVehicle
    }

}