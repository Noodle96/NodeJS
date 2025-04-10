const express = require('express');
const app = express();
const {routerTasks} = require('./routes/tasks');

// app.get('/api/v1/tasks')                 - get all tasks
// app.post('/api/v1/tasks')                - create a new task
// app.get('/api/v1/tasks/:id')             - get a single task
// app.patch('/api/v1/tasks/:id')           - update a task
// app.delete('/api/v1/tasks/:id')          - delete a task

// to practice after completing the above:
// app.get('/api/v1/tasks/completed')       - get all completed tasks
// app.get('/api/v1/tasks/pending')         - get all pending tasks
// app.get('/api/v1/tasks/overdue')         - get all overdue tasks;

// Config Middleware: Esto sirve para poder usar el body de las peticiones
app.use(express.json());

// Default Routing
app.get('/hello', (req, res) => {
    res.send('Welcome to the Task Manager API!');
});

// Routes
app.use('/api/v1/tasks', routerTasks);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});