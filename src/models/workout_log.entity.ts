import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { WorkoutLogExercise } from "./workout_log_exercise.entity";
import { User } from "./user.entity";
import { WorkoutPlan } from "./workout_plan.entity";

@Entity('workout_log')
export class WorkoutLog {
    @PrimaryGeneratedColumn()
    log_id!: number;

    // Many workout logs belong to one user
    @ManyToOne(() => User, (user) => user.user_id)
    user!: User;

    // Optionally, many workout logs can belong to one workout plan
    @ManyToOne(() => WorkoutPlan, (workoutPlan) => workoutPlan.plan_id, { nullable: true })
    workout_plan?: WorkoutPlan;
    
    // Link to exercises performed in the workout log
    @OneToMany(() => WorkoutLogExercise, (workoutLogExercise) => workoutLogExercise.workout_log)
    exercises!: WorkoutLogExercise[];

    @Column({'type': 'int'})
    sets!: number;

    @Column({'type': 'int'})
    reps!: number;

    @Column({'type': 'decimal', 'precision': 5, 'scale': 2})
    weight!: number;

    @Column({'type': 'timestamptz', 'default': () => 'CURRENT_TIMESTAMP'})
    completed_at!: Date;
}