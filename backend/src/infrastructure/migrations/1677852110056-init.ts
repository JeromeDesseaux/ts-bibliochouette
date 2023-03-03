import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1677852110056 implements MigrationInterface {
  name = 'init1677852110056';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "group" ("created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "id" SERIAL NOT NULL, "label" character varying(32) NOT NULL, CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "group"`);
  }
}
