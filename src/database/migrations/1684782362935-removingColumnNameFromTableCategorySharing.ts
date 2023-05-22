import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemovingColumnNameFromTableCategorySharing1684782362935
  implements MigrationInterface
{
  name = 'RemovingColumnNameFromTableCategorySharing1684782362935';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "category-sharing" DROP COLUMN "name"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "category-sharing" ADD "name" character varying NOT NULL`,
    );
  }
}
