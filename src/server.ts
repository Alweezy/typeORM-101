import "reflect-metadata"

import { app } from "./app"

import { createConnection } from "typeorm";
import {Customer} from "./services/customer/customerModel";

process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});

//database connection
 createConnection(
    {
        type: "sqlite",

        entities: [
            Customer
        ],

        database: "test",

        synchronize: true,
        logging: false
    }).then( connection => {

    }).catch(error => console.log(error));


const { PORT = 3000 } = process.env;


app.listen(PORT, () =>
    console.log(`Server is listening at http://localhost:${PORT} ==>`)
);