import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import CategoriesEntity from './categories.entity';

@Entity('tasks')
class TasksEntity {
  @PrimaryColumn('uuid', { unique: true })
  id: string;

  @Column('varchar', { nullable: false })
  name: string;

  @ManyToOne(() => CategoriesEntity, categories => categories.tasks)
  categories: CategoriesEntity;
}

export default TasksEntity;
