import { Schema, model } from 'mongoose'

const vehiclesSchema = new Schema({
    veiculo: {
        type: String,
        required: [true, "Veiculo is required!"],
    },
    marca: {
        type: String,
        required: [true, "Marca is required!"],
    },
    ano: {
        type: Number,
        required: [true, "Ano is required!"],
    },
    descricao: {
        type: String,
        required: [true, "Descricao is required"],
    },
    vendido: {
        type: Boolean,
        required: [true, "Vendido is required"],
    },
    _id: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: [true, "Created is required!"]
    },
    updated: {
        type: Date,
        required: true
    }
})

const vehicleModel = model('Vehicle', vehiclesSchema)

export default vehicleModel