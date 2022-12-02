export type BodyVehicle = {
    veiculo: string
    marca: string
    ano: number
    descricao: string
    vendido: boolean,
    _id: string,
}


export type Vehicle = {
    created: Date
    updated: Date
} & BodyVehicle