import ICommand from "../../types/ICommand";
import { Vehicle, UpdateVehicleValues } from "../../types/types";
import UpdateVehicle from "../UpdateVehicle/UpdateVehicle";
import ValidateVehicleChanges from "../ValidateVehicleChanges/ValidateVehicleChanges";

export default class UpdateValidatedVehicle implements ICommand<Promise<Vehicle | string>> {

    protected updatedVehicle!: Vehicle | string
    constructor(private vehicleId: string, private valuesToUpdate: UpdateVehicleValues) { }

    async execute() {
        const update = Object.assign(this.valuesToUpdate, {
            updated: new Date()
        })

        try {
            await new ValidateVehicleChanges(update).execute()
            const updatedVehicle = await new UpdateVehicle(this.vehicleId, update).execute()
            return updatedVehicle

        } catch (err) {
            const validationError: string = String(err)
            return validationError
        }

        // return new ValidateVehicleChanges(update).execute()
        //     .then(async () => {
        //         this.updatedVehicle = await new UpdateVehicle(this.vehicleId, update).execute()
        //         return this.updatedVehicle
        //     })
        //     .catch(err => {
        //         this.updatedVehicle = err
        //         return err
        //     })
        //     .finally(() => {
        //         return this.updatedVehicle
        //     })
    }

}