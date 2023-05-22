import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovingColumnNameFromTableCategorySharing1684787085765 implements MigrationInterface {
    name = 'RemovingColumnNameFromTableCategorySharing1684787085765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category-sharing" ADD "permissions" jsonb NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category-sharing" DROP COLUMN "permissions"`);
    }

}
