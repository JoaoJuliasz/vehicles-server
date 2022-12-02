import CheckIfVehicleExists from "./CheckIfVehicleExists/CheckIfVehicleExists";
import GetVehicles from "./GetVehicles/GetVehicles";
import SaveVehicle from "./SaveVehicle/SaveVehicle";
import { BodyVehicle, Vehicle } from "./types/types";
import VehicleEnricher from "./VehicleEnricher/VehicleEnricher";


export default class VehiclesModel {

    async getVehicles(): Promise<any> {
        // getVehicles(): Vehicle[] {
        return await new GetVehicles().execute()
    }

    async checkIfVehicleExists(vehicle: BodyVehicle): Promise<boolean> {
        console.warn(vehicle)
        return new CheckIfVehicleExists(vehicle, await this.getVehicles()).execute()
    }

    saveVehicle(vehicle: BodyVehicle) {
        return new SaveVehicle(vehicle).execute()
    }

    async addNewVehicle(vehicle: BodyVehicle) {
        const newVehicle = new VehicleEnricher(vehicle).execute()
        await this.saveVehicle(newVehicle)
    }

}
