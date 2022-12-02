
import express from 'express';
import VehiclesRouter from '../Vehicles/vehicles.router';

export default class App {

    execute() {
        const app = express()

        app.use(express.json())

        app.use('/vehicles', new VehiclesRouter().execute())

        app.get("/", (req, res) => {
            res.send("Hello world!");
        });

        return app
    }

}