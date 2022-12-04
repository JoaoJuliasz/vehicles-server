import ICommand from "../types/ICommand";
import vehicleDatabase from '../vehicles.mongo';

export default class RemoveVehicle implements ICommand<any> {

    constructor(private vehicleId: string) { }

    async execute() {
        return await vehicleDatabase.deleteOne({ _id: this.vehicleId })
    }

}