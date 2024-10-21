import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { WorkoutPlan } from "./workout_plan.entity";
import { Exercise } from "./exercise.entity";

@Entity('workout_plan_exercise')
export class WorkoutPlanExercise{
    @PrimaryGeneratedColumn()
    id!: number;
    
    // Many exercises belong to one workout plan
    @ManyToOne(() => WorkoutPlan, (workoutPlan) => workoutPlan.plan_id)
    workout_plan!: WorkoutPlan;

    // Many workout plan exercises can belong to one exercise
    @ManyToOne(() => Exercise, (exercise) => exercise.exercise_id)
    exercise!: Exercise;

    @Column()
    sets!: number;

    @Column()
    reps!: number;

    @Column({'type': 'decimal', 'precision': 5, 'scale': 2})
    weight!: number;
}