import ICommand from "../../types/ICommand";
import { Vehicle } from "../../types/types";

export default class ValidateVehicleTypes implements ICommand<boolean> {

    constructor(private vehicleToUpdate: Vehicle) { }

    execute() {
        if (typeof this.vehicleToUpdate.ano !== 'number' || typeof this.vehicleToUpdate.marca !== 'string'
            || typeof this.vehicleToUpdate.veiculo !== 'string' || typeof this.vehicleToUpdate.descricao !== 'string'
            || typeof this.vehicleToUpdate.vendido !== 'boolean' || typeof this.vehicleToUpdate._id !== 'string'
            || typeof this.vehicleToUpdate.created !== "string" || typeof this.vehicleToUpdate.updated !== "string") {
            return false
        }
        return true
    }

}