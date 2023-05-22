import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import CategoriesEntity from './categories.entity';
import UserEntity from './users.entity';

@Entity('category-sharing')
class CategorySharing {
  @PrimaryColumn('uuid', { unique: true })
  id: string;

  @ManyToOne(() => CategoriesEntity, categories => categories.sharing)
  categories: CategoriesEntity;

  @ManyToOne(() => UserEntity, users => users.sharing)
  user: UserEntity;

  @Column('jsonb')
  permissions: {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
  };
}

export default CategorySharing;
