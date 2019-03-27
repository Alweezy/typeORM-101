import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";


@Entity()

export class Customer {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 100
    })
    name!: string;

    @Column({
        length: 18
    })

    phone!: string;
}