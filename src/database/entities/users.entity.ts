import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import CategoriesEntity from './categories.entity';
import CategorySharing from './categorySharing.entity';

@Entity('users')
class UserEntity {
  @PrimaryColumn('uuid', { unique: true })
  id: string;

  @Column('varchar', { nullable: false })
  name: string;

  @Column('varchar', { nullable: false, unique: true })
  email: string;

  @Column('varchar', { nullable: false })
  password: string;

  @Column('varchar', { nullable: true })
  image: string;

  @OneToMany(() => CategoriesEntity, categories => categories.user)
  categories: CategoriesEntity[];

  @OneToMany(() => CategorySharing, sharing => sharing.user)
  sharing: CategorySharing[];
}

export default UserEntity;
