import ICommand from "../../types/ICommand";
import { BodyVehicle, Vehicle } from "../../types/types";

export default class ValidateVehicleNotEmpty implements ICommand<boolean> {

    constructor(private vehicleToUpdate: BodyVehicle) { }

    execute() {
        if (!this.vehicleToUpdate.ano || !this.vehicleToUpdate.descricao || !this.vehicleToUpdate.marca ||
            !this.vehicleToUpdate.vendido || !this.vehicleToUpdate.veiculo) {
            return false
        }
        return true
    }

}