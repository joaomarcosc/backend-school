import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateStudent1670375291046 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(
            new Table({
                name: "students",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "final_grade",
                        type: "float"
                    },
                    {
                        name: "approved",
                        type: "boolean"
                    },
                    {
                        name: "class_school_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_class_school",
                        columnNames: ['class_school_id'],
                        referencedTableName: "school_class",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("students")
    }

}
