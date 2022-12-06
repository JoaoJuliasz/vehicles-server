import ICommand from "../../types/ICommand";
import vehicleDatabase from '../../vehicles.mongo';

export default class RemoveVehicle implements ICommand<void> {

    constructor(private vehicleId: string) { }

    async execute() {
        await vehicleDatabase.deleteOne({ _id: this.vehicleId })
    }

}