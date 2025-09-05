# 🚀 Express + TypeScript CRUD Backend

This project is a simple **CRUD API** built with **ExpressJS + TypeScript**, using **Prisma + SQLite** for persistence.

---

## ✨ Features
- Create a resource
- List resources with optional filters
- Get details of a resource
- Update a resource
- Delete a resource

---

## ⚡ Setup Instructions

### 1. Install dependencies

    yarn install

### 2. Configure database

Prisma is configured with SQLite by default.
The database file will be created automatically in prisma/dev.db.

Generate Prisma client:

    yarn prisma migrate dev --name init

### 3. Run the server (development)

    yarn dev
### 4. Build & run (production)

    yarn build
    yarn start

### 5. API Endpoints

| Method | Endpoint         | Description                            |
| ------ | ---------------- | -------------------------------------- |
| POST   | `api/v1/resources`     | Create a resource                      |
| GET    | `api/v1/resources`     | List resources (filter by `?name=abc`) |
| GET    | `api/v1/resources/:id` | Get resource details                   |
| PUT    | `api/v1/resources/:id` | Update resource                        |
| DELETE | `api/v1/resources/:id` | Delete resource                        |


### 6. Example with CURL

    # Create
    curl -X POST http://localhost:4000/api/v1/resources -H "Content-Type: application/json" -d '{"name":"Test","description":"First resource"}'

    # List
    curl http://localhost:4000/api/v1/resources

    # Get
    curl http://localhost:4000/api/v1/resources/1

    # Update
    curl -X PUT http://localhost:4000/api/v1/resources/1 -H "Content-Type: application/json" -d '{"name":"Updated","description":"Updated desc"}'

    # Delete
    curl -X DELETE http://localhost:4000/api/v1/resources/1
