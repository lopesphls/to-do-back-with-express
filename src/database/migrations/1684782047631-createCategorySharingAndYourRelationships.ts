import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategorySharingAndYourRelationships1684782047631 implements MigrationInterface {
    name = 'CreateCategorySharingAndYourRelationships1684782047631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category-sharing" ("id" uuid NOT NULL, "name" character varying NOT NULL, "categoriesId" uuid, "userId" uuid, CONSTRAINT "PK_2891076cb950576e1e9cdf89192" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "category-sharing" ADD CONSTRAINT "FK_4a1772e7b7a0907adb65d72974a" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category-sharing" ADD CONSTRAINT "FK_3320b50ca197e4f4aec2decdee6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category-sharing" DROP CONSTRAINT "FK_3320b50ca197e4f4aec2decdee6"`);
        await queryRunner.query(`ALTER TABLE "category-sharing" DROP CONSTRAINT "FK_4a1772e7b7a0907adb65d72974a"`);
        await queryRunner.query(`DROP TABLE "category-sharing"`);
    }

}
