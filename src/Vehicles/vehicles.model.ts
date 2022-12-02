import GetVehicles from "./GetVehicles/GetVehicles";
import { Vehicle } from "./types/types";

export default class VehiclesModel {

    getVehicles(): Vehicle[] {
        return new GetVehicles().execute()
    }
}
