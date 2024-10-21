import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exercise } from "./exercise";

@Entity('muscle_group')
export class MuscleGroup{
  @PrimaryGeneratedColumn()
  muscle_group_id!: number;

  @Column({'type': 'varchar', 'length': 55})
  muscle_group_name!: string;

  // One muscle group can encompass many exercises
  @OneToMany(() => Exercise, (exercise) => exercise.muscle_group_id)
  exercises!: Exercise[];
}