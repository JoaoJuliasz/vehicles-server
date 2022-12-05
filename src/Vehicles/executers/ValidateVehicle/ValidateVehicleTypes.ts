import ICommand from "../../types/ICommand";
import { Vehicle, UpdateVehicleValues, BodyVehicle } from "../../types/types";

export default class ValidateVehicleTypes implements ICommand<boolean> {

    constructor(private vehicleToUpdate: BodyVehicle) { }

    execute() {
        if (typeof this.vehicleToUpdate.ano !== 'number' || typeof this.vehicleToUpdate.marca !== 'string'
            || typeof this.vehicleToUpdate.veiculo !== 'string' || typeof this.vehicleToUpdate.marca !== 'boolean') {
            return false
        }
        return true
    }

}