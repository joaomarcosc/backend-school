import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateGrade1670445279320 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(
            new Table({
                name: "grade",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "student_id",
                        type: "uuid"
                    },
                    {
                        name: "classroom_id",
                        type: "uuid"
                    },
                    {
                        name: "final_grade",
                        type: "varchar"
                    },
                    {
                        name: "approved",
                        type: "boolean"
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
                        name: "fk_student",
                        columnNames: ['student_id'],
                        referencedTableName: "students",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_classroom",
                        columnNames: ['classroom_id'],
                        referencedTableName: "school_class",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("grade")
    }

}
