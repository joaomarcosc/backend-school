import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateClass1670110723184 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(
            new Table({
                name: "school_class",
                columns: [
                    {
                        name: "id",
                        isPrimary: true,
                        type: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "school_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_class_school",
                        columnNames: ['school_id'],
                        referencedTableName: "school",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("school_class")
    }

}
