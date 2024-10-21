import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { WorkoutPlan } from './workout_plan';
import { UserJwt } from './user_jwt';
import { WorkoutLog } from './workout_log';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  user_id!: number;

  @Column({'type': 'varchar', 'length': 100})
  user_name!: string;

  @Column({'type': 'varchar', 'length': 100})
  user_email!: string;

  @Column({'type': 'varchar', 'length': 255})
  user_password!: string;
  
  @CreateDateColumn({ type: 'timestamptz' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at!: Date;

  // One user can have many different workout plans
  @OneToMany(() => WorkoutPlan, (workoutPlan) => workoutPlan.user_id)
  workout_plans!: WorkoutPlan[];

  // One user can have many workout logs
  @OneToMany(() => WorkoutLog, (workoutLog) => workoutLog.user)
  workout_logs!: WorkoutLog[];

  // One user can have many tokens (for multiple sessions or devices)
  @OneToMany(() => UserJwt, (token) => token.user_id)
  tokens!: UserJwt[];
}