
import express from 'express';
import cors from 'cors';
import VehiclesRouter from '../Vehicles/vehicles.router';

export default class App {

    execute() {
        const app = express()

        app.use(cors({
            origin: '*'
        }))

        app.use(express.json())
        app.use(express.urlencoded({ extended: false }))

        app.use('/vehicles', new VehiclesRouter().execute())

        app.get("/", (req, res) => {
            res.send("Hello world!");
        });

        return app
    }

}