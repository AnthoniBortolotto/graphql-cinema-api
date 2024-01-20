import { MigrationInterface, QueryRunner } from 'typeorm';

export class SectionAddedToMovie1705771139059 implements MigrationInterface {
  name = 'SectionAddedToMovie1705771139059';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "section" ADD "movieId" integer`);
    await queryRunner.query(
      `ALTER TABLE "section" ADD CONSTRAINT "FK_a9c10927a7cf9a819db42ba209c" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "section" DROP CONSTRAINT "FK_a9c10927a7cf9a819db42ba209c"`,
    );
    await queryRunner.query(`ALTER TABLE "section" DROP COLUMN "movieId"`);
  }
}
