import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exercise } from "./exercise.entity";

@Entity('exercise_category')
export class ExerciseCategory{
    @PrimaryGeneratedColumn()
    exercise_category_id!: number;

    @Column({'type': 'varchar', 'length': 55})
    exercise_category_name!: string;

    // One category can encompasses many exercises
    @OneToMany(() => Exercise, (exercise) => exercise.exercise_id)
    exercises!: Exercise[];
}