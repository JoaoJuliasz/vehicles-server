import ICommand from "../types/ICommand";
import { Vehicle } from "../types/types";

import vehicleDatabase from '../vehicles.mongo';

export default class GetVehicles implements ICommand<Vehicle[] | {}> {

    constructor(private filter?: string) { }

    async execute() {

        const filter =
            this.filter ?
                {
                    veiculo: {
                        $regex: this.filter
                    }
                }
                : {}

        return await vehicleDatabase
            .find(filter
                , { '__v': 0 }
            )
            .sort('created')
    }

}