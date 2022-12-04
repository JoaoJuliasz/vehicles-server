import CheckIfVehicleExists from "./CheckIfVehicleExists/CheckIfVehicleExists";
import ExistsVehicleWithId from "./ExistsVehicleWithId/ExistsVehicleWithId";
import GetVehicles from "./GetVehicles/GetVehicles";
import RemoveVehicle from "./RemoveVehicle/RemoveVehicle";
import SaveVehicle from "./SaveVehicle/SaveVehicle";
import { BodyVehicle, Vehicle } from "./types/types";
import VehicleEnricher from "./VehicleEnricher/VehicleEnricher";


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

    async removeVehicle(vehicleId: string) {
        const teste = await new RemoveVehicle(vehicleId).execute()
        console.warn(teste)
    }

}
