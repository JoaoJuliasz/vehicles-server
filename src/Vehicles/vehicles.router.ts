import express from 'express'
import ICommand from './types/ICommand';
import VehicleController from './vehicles.controller';

export default class VehiclesRouter implements ICommand<any> {

    private vehiclesController: any = new VehicleController()
    constructor() { }

    execute(): express.Router {
        const vehiclesRouter = express.Router()
        vehiclesRouter.get('/', this.vehiclesController.httpGetVehicles)
        vehiclesRouter.post('/', this.vehiclesController.httpCreateNewVehicle)

        return vehiclesRouter
    }

}