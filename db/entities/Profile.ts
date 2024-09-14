import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title:string;
    @Column()
    mainTile:string;
    @Column()
    description:string;
}
