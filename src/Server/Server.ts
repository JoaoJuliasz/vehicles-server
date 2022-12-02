import App from '../App/App'
import http from "http"

import * as dontenv from 'dotenv'

dontenv.config()

export default class Server {

    private server!: http.Server

    start() {
        const app = new App().execute()
        this.server = http.createServer(app)
        this.startServer()
        
    }
    startServer() {
        const PORT = process.env.PORT
        this.server.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`)
        })
    }

}