import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    clientId: string;

    @Column({ nullable: false })
    clientSecret: string;

    @Column({ nullable: false })
    fullName: string;

    @Column({ nullable: false })
    documentType: string;

    @Column({ nullable: false })
    referenceId: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    cellPhone: string;

    @Column({ nullable: false })
    document: string;

    @Column({ nullable: false })
    description: string;

    @Column({ nullable: false })
    password: string;

    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;
}