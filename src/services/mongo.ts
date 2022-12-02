import mongoose from 'mongoose'
import * as dontenv from 'dotenv'

dontenv.config()

const MONGO_URL = process.env.MONGO_URL || ""

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!')
})

mongoose.connection.on('error', (err) => {
    console.log(err)
})

export async function mongoConnection() {
    await mongoose.connect(MONGO_URL)
}

export async function mongoDesconnection() {
    await mongoose.disconnect()
}