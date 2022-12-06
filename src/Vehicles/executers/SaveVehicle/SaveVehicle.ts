import ICommand from "../../types/ICommand";
import { BodyVehicle, Vehicle } from "../../types/types";
import vehiclesDatabase from '../../vehicles.mongo'

export default class SaveVehicle implements ICommand<Promise<Vehicle | string>>{

    constructor(private vehicle: BodyVehicle) { }

    async execute() {
        const vehicle = new vehiclesDatabase(this.vehicle)
        return vehicle.save()
            .then((res) => res)
            .catch(err => err.message)
    }

}