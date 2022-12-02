import { Schema, model } from 'mongoose'

const vehiclesSchema = new Schema({
    veiculo: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    vendido: {
        type: Boolean,
        required: true
    },
    _id: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true
    },
    updated: {
        type: Date,
        required: true
    }
})

export default model('Vehicle', vehiclesSchema)