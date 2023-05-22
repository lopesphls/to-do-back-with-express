import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableTasksAndRelationshipToCategories1684776635765 implements MigrationInterface {
    name = 'CreateTableTasksAndRelationshipToCategories1684776635765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tasks" ("id" uuid NOT NULL, "name" character varying NOT NULL, "categoriesId" uuid, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_79e4f18420b0a95e34da8d7a8a1" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_79e4f18420b0a95e34da8d7a8a1"`);
        await queryRunner.query(`DROP TABLE "tasks"`);
    }

}
