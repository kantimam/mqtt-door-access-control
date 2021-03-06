import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { Building } from "./Building";
import { Lock } from "./Lock";
import { Reader } from "./Reader";


@Entity()
export class Apartment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 100, nullable: false, default: "unbekannte Wohnung" })
    name: string;

    

    @Column("varchar", { nullable: true })
    info: string;

    @Column({ type: "int", nullable: true })
    apartmentLockId: number;

    @ManyToOne(()=> Lock, lock=>lock.apartmentLock, { onDelete: "SET NULL"})
    @JoinColumn({name: "apartmentLockId"})
    public apartmentLock: Lock;


    @Column({ type: "int", nullable: true })
    buildingId: number;

    @ManyToOne(()=> Building, building=> building.apartments)
    @JoinColumn({name: "buildingId"})
    public building: Building;

    @OneToMany(()=>Lock, lock=>lock.apartment/* , { cascade: true, onDelete: 'SET NULL', onUpdate: "CASCADE" } */)
    locks: Lock[];

    @OneToMany(()=>Reader, reader=>reader.apartment, { onDelete: 'SET NULL' })
    readers: Reader[];

}
