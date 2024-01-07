import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity()
export class Anime{
    @PrimaryGeneratedColumn("uuid")
    a_id : string;

    @Column()
    a_name : string;

    @Column()
    a_contains: string;

    @Column()
    a_created_at: string;

    @Column()
    a_updated_at: string;

    @Column()
    a_deleted_at: string;
}