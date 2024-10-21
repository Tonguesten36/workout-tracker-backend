import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import { ExerciseCategory } from './exercise_category.entity';
import { MuscleGroup } from './muscle_group.entity';
import { WorkoutPlanExercise } from './workout_plan_exercise.entity';

@Entity('exercise')
export class Exercise {
  @PrimaryGeneratedColumn()
  exercise_id!: number;

  // Many exercises can belong to one exercise category
  @ManyToOne(() => ExerciseCategory, (exerciseCategory) => exerciseCategory.exercises)
  exercise_category_id!: number;

  // Many exercises can belong to one muscle group
  @ManyToOne(() => MuscleGroup, (muscleGroup) => muscleGroup.exercises)
  muscle_group_id!: number;

  // One exercise can be linked to many WorkoutPlanExercise records
  @OneToMany(() => WorkoutPlanExercise, (workoutPlanExercise) => workoutPlanExercise.exercise)
  workoutPlanExercises!: WorkoutPlanExercise[];

  @Column({'type': 'varchar', 'length': 55})
  exercise_name!: string;

  @Column({'type': 'varchar', 'length': 200})
  exercise_desc!: string;
}