# it_solution_pte_test_backend

## Как запустить локально

Для локального запуска использую докер контейнеры. Один с NestJS, второй с БД PostgreSQL

Собрать контейнеры

``docker compose build``

Запустить контейнеры

``docker compose up``

Локальный проект будет доступ по адресу **http://localhost:3000/graphql**

## Схема запроса

```
query UserProfile {
  userProfile {
    id
    firstName
    lastName
    shortDescription
    githubLink
    linkedinLink
    itchioLink
    skills {
      name
    }
    experiences {
      title
      companyName
      description
      startDate
      endDate
    }
    projects {
      title
      link
    }
  }
}
```
## Стек

- NestJS
- Prisma
- PostgreSQL
- Express (для servelles на домене vercel)
- Graphql
- Docker compose
