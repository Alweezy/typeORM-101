import {Customer} from "./customerModel";
import { getManager } from "typeorm";
import {Request, Response} from "express";


export const createCustomer = async (req : Request, res: Response) => {

    const customer = new Customer();
    customer.name = req.body.name;
    customer.phone = req.body.phone;

    const response = await getManager().save(customer);
    res.status(201).send(response);
};

export const getCustomers = async (req : Request, res: Response) => {

    const queryParam = req.query.q;
    if (queryParam) {
        const allCustomers = await getManager().find(Customer, {
            where: [
                { name: queryParam},
                { phone: queryParam }
            ]
        });

        res.status(200).send(allCustomers);
    } else {
        const allCustomers = await getManager().find(Customer);
        res.status(200).send(allCustomers);
    }

};

export const getCustomerById = async (req : Request, res: Response) => {

    const customer = await getManager().findOne(Customer, req.params.id);
    res.status(200).send(customer);
};