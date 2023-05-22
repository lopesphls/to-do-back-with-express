import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import CategorySharing from './categorySharing.entity';
import TasksEntity from './task.entity';
import UserEntity from './users.entity';

@Entity('categories')
class CategoriesEntity {
  @PrimaryColumn('uuid', { unique: true })
  id: string;

  @Column('varchar', { nullable: false })
  name: string;

  @ManyToOne(() => UserEntity, user => user.categories)
  user: UserEntity;

  @OneToMany(() => TasksEntity, tasks => tasks.categories)
  tasks: TasksEntity[];

  @OneToMany(() => CategorySharing, sharing => sharing.categories)
  sharing: CategorySharing[];
}

export default CategoriesEntity;
