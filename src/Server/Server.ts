import http from "http"
import * as dontenv from 'dotenv'

import App from '../App/App'
import { mongoConnection } from '../services/mongo'

dontenv.config()

export default class Server {

    private server!: http.Server

    start() {
        const app = new App().execute()
        this.server = http.createServer(app)
        this.startServer()

    }
    async startServer() {
        const PORT = process.env.PORT
        await mongoConnection()
        this.server.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
    }

}