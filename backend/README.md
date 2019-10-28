# MeetApp Backend

## Rodando a aplicação

Na pasta meetapp-backend, faça:
```bash
$ yarn
```

Crie um arquivo ```.env``` com o conteúdo presente em ```.env.example```.

Inicie os contêineres dos bancos de dados, exemplo:
```bash
$ docker start database mongomeetapp redismeetapp
```

Crie a base de dados do meetapp no postgres e rode as migrations, fazendo:
```bash
$ yarn sequelize db:migrate
```
