import ICommand from "../types/ICommand";
import { Vehicle } from "../types/types";

export default class GetVehicles implements ICommand<any> {

    execute() {
        const vehicles: Vehicle[] = [{
            veiculo: 'teste',
            marca: 'testada',
            ano: 123,
            descricao: 'um belo carro',
            vendido: true,
            created: new Date(),
            updated: new Date(),
        }]
        return vehicles
    }

}