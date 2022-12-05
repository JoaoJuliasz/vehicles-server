import CheckIfVehicleExists from "./executers/CheckIfVehicleExists/CheckIfVehicleExists";
import ExistsVehicleWithId from "./executers/ExistsVehicleWithId/ExistsVehicleWithId";
import GetVehicles from "./executers/GetVehicles/GetVehicles";
import RemoveVehicle from "./executers/RemoveVehicle/RemoveVehicle";
import SaveVehicle from "./executers/SaveVehicle/SaveVehicle";
import { BodyVehicle, UpdateVehicleValues, Vehicle } from "./types/types";
import UpdateVehicle from "./executers/UpdateVehicle/UpdateVehicle";
import ValidateVehicleNotEmpty from "./executers/ValidateVehicle/ValidateVehicleNotEmpty";
import ValidateVehicleTypes from "./executers/ValidateVehicle/ValidateVehicleTypes";
import VehicleEnricher from "./executers/VehicleEnricher/VehicleEnricher";


export default class VehiclesModel {

    async getVehicles(): Promise<Vehicle[]> {
        const vehicles = await new GetVehicles().execute()
        return vehicles
    }

    async getFilterdVehicles(filter: string) {
        const filteredVehicles = await new GetVehicles(filter).execute()
        return filteredVehicles
    }

    async checkIfVehicleExists(vehicle: BodyVehicle): Promise<boolean> {
        return new CheckIfVehicleExists(vehicle, await this.getVehicles()).execute()
    }

    async existsVehicleWithId(vehicleId: string): Promise<Vehicle | null> {
        return await new ExistsVehicleWithId(vehicleId).execute()
    }

    async saveVehicle(vehicle: BodyVehicle) {
        return await new SaveVehicle(vehicle).execute()
    }

    async addNewVehicle(vehicle: BodyVehicle) {
        const newVehicle = new VehicleEnricher(vehicle).execute()
        await this.saveVehicle(newVehicle)
    }

    async updateVehicle(vehicleId: string, valuesToUpdate: UpdateVehicleValues) {
        return new UpdateVehicle(vehicleId, valuesToUpdate).execute()
    }

    async removeVehicle(vehicleId: string) {
        await new RemoveVehicle(vehicleId).execute()
    }

    validateVehicleTypes(vehicle: Vehicle) {
        return new ValidateVehicleTypes(vehicle).execute()
    }

    validateVehicleNotEmpty(vehicle: Vehicle) {
        return new ValidateVehicleNotEmpty(vehicle).execute()
    }

}
