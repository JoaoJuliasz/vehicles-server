import express from 'express'
import ICommand from './types/ICommand';
import VehicleController from './vehicles.controller';

export default class VehiclesRouter implements ICommand<any> {

    private vehiclesController: any = new VehicleController()
    constructor() { }

    execute(): express.Router {
        const vehiclesRouter = express.Router()
        vehiclesRouter.get('/', this.vehiclesController.httpGetVehicles)
        vehiclesRouter.get('/find', this.vehiclesController.httpGetVehiclesByFilter)
        vehiclesRouter.get('/:_id', this.vehiclesController.httpGetVehicle)
        vehiclesRouter.post('/', this.vehiclesController.httpCreateNewVehicle)
        vehiclesRouter.put('/:_id', this.vehiclesController.httpUpdateVehicleValues)
        // vehiclesRouter.put('/:_id', this.vehiclesController.httpUpdateVehicle)
        vehiclesRouter.delete('/:_id', this.vehiclesController.httpRemoveVehicle)

        return vehiclesRouter
    }

}