import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, BeforeUpdate } from "typeorm";
import * as bcrypt from "bcrypt";
import { Key } from "./Key";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { unique: true })
    username: string;

    @Column("varchar")
    password: string;

    @Column("varchar", { default: "guest" })
    type: string;

    @OneToMany(() => Key, key => key.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    keys: Key[];

    @BeforeInsert()
    async function() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}
