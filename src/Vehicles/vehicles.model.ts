import CheckIfVehicleExists from "./executors/CheckIfVehicleExists/CheckIfVehicleExists";
import ExistsVehicleWithId from "./executors/ExistsVehicleWithId/ExistsVehicleWithId";
import GetVehicles from "./executors/GetVehicles/GetVehicles";
import RemoveVehicle from "./executors/RemoveVehicle/RemoveVehicle";
import SaveVehicle from "./executors/SaveVehicle/SaveVehicle";
import UpdateValidatedVehicle from "./executors/UpdateValidatedVehicle/UpdateValidatedVehicle";
import UpdateVehicle from "./executors/UpdateVehicle/UpdateVehicle";
import VehicleEnricher from "./executors/VehicleEnricher/VehicleEnricher";

import { BodyVehicle, UpdateVehicleValues, Vehicle } from "./types/types";


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
        return await this.saveVehicle(newVehicle)
    }

    async updateVehicleValues(vehicleId: string, valuesToUpdate: UpdateVehicleValues) {
        const updatedReturn = await new UpdateValidatedVehicle(vehicleId, valuesToUpdate).execute()
        return updatedReturn
    }

    async updateVehicle(vehicleId: string, valuesToUpdate: UpdateVehicleValues) {
        const updatedReturn = await new UpdateVehicle(vehicleId, valuesToUpdate).execute()
        return updatedReturn
    }

    async removeVehicle(vehicleId: string) {
        await new RemoveVehicle(vehicleId).execute()
    }
}
