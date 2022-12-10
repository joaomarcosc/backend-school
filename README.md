
## Documentação da API

### Requisitos
- Ter o postgres instalado em sua máquina
- Criar uma tabela no postgres chamada: school
- O arquivo de configurações está localizado no seguinte path: /src/configs/ormconfig.ts

### Comandos necessários
- Instalar os pacotes: npm install ou npm i 
- Rodar as migrations: npm run migration:run 
- Rodar a aplicação: npm run dev


#### Retorna todos os alunos
```http
  GET /students
```

#### Retorna um aluno
```http
  GET /students/${student_id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `student_id` | `string` | **Obrigatório**. O ID do aluno que você quer|

#### Retorna todos as turmas
```http
  GET /school-class
```

#### Retorna uma turma
```http
  GET /school/${classroom_id}/class
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `classroom_id` | `string` | **Obrigatório**. O ID da turma que você quer |

#### Retorna todos os professores
```http
  GET /teacher
```

#### Retorna um professor
```http
  GET /teacher/${teacher_id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `teacher_id` | `string` | **Obrigatório**. O ID do professor que você quer |


#### Retorna todos os boletins
```http
  GET /grade
```