import { Request, Response } from 'express'
import HttpGetVehicles from "./ControllerFunctions/HttpGetVehicles";
import HttpGetVehicle from "./ControllerFunctions/HttpGetVehicle";
import HttpGetVehicleByFilter from "./ControllerFunctions/HttpGetVehiclesByFilter";
import HttpCreateNewVehicle from "./ControllerFunctions/HttpCreateNewVehicle";
import HttpUpdateVehicleValues from "./ControllerFunctions/HttpUpdateVehicleValues";
import HttpRemoveVehicle from "./ControllerFunctions/HttpRemoveVehicle";

export default class VehicleController {

    constructor() { }

    async httpGetVehicles(req: Request, res: Response) {
        await new HttpGetVehicles(res).execute()
    }

    async httpGetVehicle(req: Request, res: Response) {
        await new HttpGetVehicle({ req, res }).execute()
    }

    async httpGetVehiclesByFilter(req: Request<{}, {}, {}, { q: string }>, res: Response) {
        await new HttpGetVehicleByFilter({ req, res }).execute()
    }

    async httpCreateNewVehicle(req: Request, res: Response) {
        await new HttpCreateNewVehicle({ req, res }).execute()
    }

    async httpUpdateVehicleValues(req: Request, res: Response) {
        await new HttpUpdateVehicleValues({ req, res }).execute()
    }

    // async httpUpdateVehicle(req: Request, res: Response) {
    //     const vehicleId = req.params._id
    //     const foundVehicle = await this.vehicleModel.existsVehicleWithId(vehicleId)
    //     const valuesToUpdate = req.body
    //     if (!foundVehicle) {
    //         return res.status(404).json({
    //             error: "Vehicle with this id not exists!"
    //         })
    //     }
    //     const updatedVehicle = await this.vehicleModel.updateVehicle(vehicleId, valuesToUpdate)
    //     return res.status(200).json(updatedVehicle)

    // }

    async httpRemoveVehicle(req: Request, res: Response) {
        await new HttpRemoveVehicle({ req, res }).execute()
    }

}