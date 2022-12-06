import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTeacher1670276448541 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: "teacher",
                columns: [
                    {
                        name: "id",
                        isPrimary: true,
                        type: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "document",
                        type: "varchar"
                    },
                    {
                        name: "academic_title",
                        type: "varchar"
                    },
                    {
                        name: "discipline_teaches",
                        type: "varchar"
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
        await queryRunner.dropTable("teacher")
    }

}
