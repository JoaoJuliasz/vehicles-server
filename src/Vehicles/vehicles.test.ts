import request from 'supertest'
import App from '../App/App'

import { mongoConnection, mongoDisconnection } from '../services/mongo'
import { UpdateVehicleValues } from './types/types'

describe('Vehicle API', () => {
    beforeAll(async () => {
        await mongoConnection()
    })

    afterAll(async () => {
        await mongoDisconnection()
    })

    const app = new App().execute()

    describe('Test GET /vehicles', () => {
        test('Should respond with 200 sucess', async () => {
            const response = await request(app)
                .get('/vehicles')
                .expect('Content-Type', /json/)
                .expect(200)
        })
    })

    describe('Test GET /vehicles/{id}', () => {
        test('Should response with 404 not found', async () => {
            const response = await request(app)
                .get('/vehicles/632ddq2368320a679c71bd9')
                .expect('Content-type', /json/)
                .expect(404)

            expect(response.body).toStrictEqual({
                error: 'Vehicle not found!'
            })
        })
    })

    describe('Test Get /vehicles/find', () => {
        test('Should respond with no vehicles found', async () => {
            const response = await request(app)
                .get('/vehicles/find?q=asdasd')
                .expect('Content-type', /json/)
                .expect(200)

            expect(response.body).toStrictEqual({
                message: 'No vehicles found!'
            })
        })
    })

    describe('Create, Update and Delete vehicle', () => {
        let vehicle = {
            ano: 2022,
            descricao: "Esse é um caro bem economico",
            marca: "Renault",
            veiculo: "kwid zen",
            vendido: true
        } as UpdateVehicleValues

        describe('Test POST /vehicles', () => {
            test('Should create a vehicle and respond with 201 created', async () => {
                const response = await request(app)
                    .post('/vehicles')
                    .send(vehicle)
                    .expect('Content-type', /json/)
                    .expect(201)

                vehicle = Object.assign(vehicle, response.body)
            })
        })

        describe('Test PUT /vehicles/{id}', () => {
            test('Should update vehicle and respond with 200 success', async () => {
                const vehicleToUpdate = Object.assign(vehicle, { veiculo: "Captur" })
                const response = await request(app)
                    .put(`/vehicles/${vehicle._id}`)
                    .send(vehicleToUpdate)
                    .expect('Content-type', /json/)
                    .expect(200)
            })
        })

        describe('Test DELETE /vehicles/{id}', () => {
            test('Should delete vehicle and respond with 200 success', async () => {
                const response = await request(app)
                    .delete(`/vehicles/${vehicle._id}`)
                    .expect('Content-type', /json/)
                    .expect(200)
            })
        })

    })
})