import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity('user_jwt')
export class UserJwt{
    @PrimaryGeneratedColumn()
    token_id!: number;

    // an user can have many tokens
    @ManyToOne(() => User, (user) => user.user_id)
    user_id!: number;

    @Column({'type': 'varchar', 'length': 255})
    token!: string;

    @Column({'type': 'timestamptz', 'default': () => 'CURRENT_TIMESTAMP'})
    created_at!: Date;

    @Column({'type': 'timestamptz'})
    expire_date!: Date;
}