import ICommand from "../../types/ICommand";
import { BodyVehicle, Vehicle } from "../../types/types";

export default class CheckIfVehicleExists implements ICommand<boolean> {

    constructor(private newVehicle: BodyVehicle, private vehicles: Vehicle[]) { }

    execute() {
        const vehicleExists = this.vehicles.findIndex(vehicle => vehicle.veiculo === this.newVehicle.veiculo
            && vehicle.marca === this.newVehicle.marca && vehicle.ano === this.newVehicle.ano)
        return vehicleExists > -1
    }

} 