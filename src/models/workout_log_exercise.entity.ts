import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Exercise } from "./exercise.entity";
import { WorkoutLog } from "./workout_log.entity";

export class WorkoutLogExercise{
    @PrimaryGeneratedColumn()
    id!: number;
  
    // Many log exercises belong to one workout log
    @ManyToOne(() => WorkoutLog, (workoutLog) => workoutLog.exercises)
    workout_log!: WorkoutLog;
  
    // Many log exercises belong to one exercise
    @ManyToOne(() => Exercise, (exercise) => exercise.exercise_id)
    exercise!: Exercise;
  
    @Column({ type: 'int' })
    sets!: number;
  
    @Column({ type: 'int' })
    reps!: number;
  
    @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
    weight!: number;
}