import { createCustomer, getCustomers, getCustomerById} from "./customerController";


//get all customers
export default [
    {
        path: "/api/v1/customers/",
        method: "post",
        handler: createCustomer
    },

    {
        path: "/api/v1/customers/",
        method: "get",
        handler: getCustomers
    },

    {
        path: "/api/v1/customers/:id",
        method: "get",
        handler: getCustomerById
    },
];

