import { Entity, Column, PrimaryColumn,  JoinColumn, ManyToOne } from "typeorm";
import { Key } from "./Key";
import {Reader} from "./Reader"

@Entity()
export class ReaderKey {
    
    

    @PrimaryColumn()
    readerId: number;
    @ManyToOne(() => Reader, reader => reader.readerKeys, {primary: true, persistence: false/* , onDelete: 'CASCADE', onUpdate: 'CASCADE' */})
    @JoinColumn({name: "readerId", referencedColumnName: "id"})
    reader: Reader;

    @PrimaryColumn()
    keyId: number;
    @ManyToOne(() => Key, key => key.readerKeys, {primary: true, onDelete: "CASCADE"})
    @JoinColumn({name: "keyId", referencedColumnName: "id"})
    key: Key;
    


    @Column("integer", { default: 1 })
    acctype: number

    @Column("integer", { default: 0 })
    acctype2: number

    @Column("integer", { default: 0 })
    acctype3: number

    @Column("integer", { default: 0 })
    acctype4: number

    @Column("integer", { default: 0 })
    acctype5: number

    @Column("integer", { default: 0 })
    acctype6: number

    
    
}
