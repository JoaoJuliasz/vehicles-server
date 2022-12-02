import ICommand from "../types/ICommand";
import { Vehicle } from "../types/types";

import vehicleDatabase from '../vehicles.mongo';

export default class GetVehicles implements ICommand<any> {

    async execute() {
        // const vehicles: Vehicle[] = [{
        //     veiculo: 'teste',
        //     marca: 'testada',
        //     ano: 123,
        //     descricao: 'um belo carro',
        //     vendido: true,
        //     created: new Date(),
        //     updated: new Date(),
        // }]
        return await vehicleDatabase
            .find({}, { '__v': 0 })
            .sort('created')

    }

}