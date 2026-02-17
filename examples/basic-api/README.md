# Basic API

In-memory task CRUD API using the commands addon.

## Run

```bash
node index.js
```

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | List all tasks |
| POST | /api/tasks | Create a task |
| PUT | /api/tasks/:id | Toggle task done |
| DELETE | /api/tasks/:id | Delete a task |

## Example

```bash
# Create
curl -X POST http://localhost:3000/api/tasks -d '{"title":"Buy milk"}'

# List
curl http://localhost:3000/api/tasks

# Toggle
curl -X PUT http://localhost:3000/api/tasks/1234

# Delete
curl -X DELETE http://localhost:3000/api/tasks/1234
```
