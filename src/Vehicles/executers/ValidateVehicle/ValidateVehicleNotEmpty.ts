import ICommand from "../../types/ICommand";
import { Vehicle } from "../../types/types";

export default class ValidateVehicleNotEmpty implements ICommand<boolean> {

    constructor(private vehicleToUpdate: Vehicle) { }

    execute() {
        if (!this.vehicleToUpdate.ano || !this.vehicleToUpdate.descricao || !this.vehicleToUpdate.marca ||
            (this.vehicleToUpdate.vendido === null || this.vehicleToUpdate.vendido === undefined) || !this.vehicleToUpdate.veiculo || !this.vehicleToUpdate._id ||
            !this.vehicleToUpdate.created || !this.vehicleToUpdate.updated) {
            return false
        }
        return true
    }
}