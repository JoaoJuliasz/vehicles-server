export type BodyVehicle = {
    veiculo: string
    marca: string
    ano: number
    descricao: string
    vendido: boolean,
    _id: string,
}


export type Vehicle = {
    created: Date | string
    updated: Date | string
} & BodyVehicle

export type UpdateVehicleValues = {
    [key in keyof Vehicle]: Vehicle[keyof Vehicle]
}