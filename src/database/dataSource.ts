import 'dotenv/config';
import { DataSource } from 'typeorm';
import CategoriesEntity from './entities/categories.entity';
import CategorySharing from './entities/categorySharing.entity';
import TasksEntity from './entities/task.entity';
import UserEntity from './entities/users.entity';
import { Users1684768171260 } from './migrations/1684768171260-users';
import { CreateCategoriesAndRelationshipToUser1684772125201 } from './migrations/1684772125201-createCategoriesAndRelationshipToUser';
import { CreateTableTasksAndRelationshipToCategories1684776635765 } from './migrations/1684776635765-createTableTasksAndRelationshipToCategories';
import { CreateCategorySharingAndYourRelationships1684782047631 } from './migrations/1684782047631-createCategorySharingAndYourRelationships';
import { RemovingColumnNameFromTableCategorySharing1684782362935 } from './migrations/1684782362935-removingColumnNameFromTableCategorySharing';
import { RemovingColumnNameFromTableCategorySharing1684787085765 } from './migrations/1684787085765-removingColumnNameFromTableCategorySharing';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.HOST,
  port: process.env.PORTDB ? +process.env.PORTDB : undefined,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [UserEntity, CategoriesEntity, TasksEntity, CategorySharing],
  migrations: [
    Users1684768171260,
    CreateCategoriesAndRelationshipToUser1684772125201,
    CreateTableTasksAndRelationshipToCategories1684776635765,
    CreateCategorySharingAndYourRelationships1684782047631,
    RemovingColumnNameFromTableCategorySharing1684782362935,
    RemovingColumnNameFromTableCategorySharing1684787085765,
  ],
});
