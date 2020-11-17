const request = require('supertest')
const server = require('../api/server')


describe("GET all the foods", () => {
    it("Should return a 200 http status code if food items is fetched correctly", () => {

        return request(server)
        .get("/")
        .then(response => {
            expect(response.status).toBe(200)
        })
    })
})

describe("GET a food by ID", () => {
    it("Should return a 200 http status code if food item is fetched correctly", () => {

        return request(server)
        .get("/:id")
        .then(response => {
            expect(response.status).toBe(200)
        })
    })
})

describe("PUT a food by ID", () => {
    it("Should return a 404 if a bad request is made", () => {

        return request(server)
        .put("/:id")
        .then(response => {
            expect(response.status).toBe(404)
        })
    })
})