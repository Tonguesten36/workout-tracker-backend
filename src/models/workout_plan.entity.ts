import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Exercise } from "./exercise.entity";
import { WorkoutPlanExercise } from "./workout_plan_exercise.entity";

@Entity('workout_plan')
export class WorkoutPlan{
    @PrimaryGeneratedColumn()
    plan_id!: number;
    
    // one user can have many workout plan
    @ManyToOne(() => User, (user) => user.workout_plans)
    user_id!: User;

    // Different plans can have different exercises
    @ManyToMany(() => WorkoutPlanExercise, (workoutPlanExercise) => workoutPlanExercise.workout_plan)
    @JoinTable()  // This creates a junction table to store exercises per workout plan
    exercises!: Exercise[];

    @Column({'type': 'varchar', 'length': 55})
    plan_name!: string;

    @Column({'type': 'timestamptz'})
    scheduled_date!: Date;

    @Column({'type': 'timestamptz', 'default': () => 'CURRENT_TIMESTAMP'})
    start_date!: Date;

    @Column({'type': 'timestamptz', 'nullable': true})
    end_date?: Date;
}