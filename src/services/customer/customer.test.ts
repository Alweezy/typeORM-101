import request from "supertest";


import {app} from "../../app";


describe("/POST add new customers", () => {

    test("Should add a new customer", (done) => {
        const customer = {
            name: "joe",
            phone: "00000005964"
        };

        request(app)
            .post("/api/v1/customers/")
            .send(customer)
            .expect(201);
        done()
    });
});

describe("/GET customers", () => {

    test("Should fetch all customers", (done) => {
        request(app)
            .get("/api/v1/customers/")
            .expect(200)
        done()
    });
});

describe("/GET customers by Id", () => {

    test("Should fetch all customers", (done) => {
        request(app)
            .get("/api/v1/customers/1")
            .expect(200)
        done()
    });
});
