import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateSchool1670044359071 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: 'school',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "document",
                        type: "varchar",
                    },
                    {
                        name: "address",
                        type: "varchar"
                    },
                    {
                        name: "zipcode",
                        type: "varchar"
                    },
                    {
                        name: "city",
                        type: "varchar"
                    },
                    {
                        name: "state",
                        type: "varchar"
                    },
                    {
                        name: "country",
                        type: "varchar"
                    },
                    {
                        name: "brand",
                        type: "varchar",
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('school')
    }
}
