const db = require('../data/db-config');

module.exports = {
    getTask,
    getTaskById,
    addTask
};

function getTask() {
    return db('task');        
};

function getTaskById(task_id) {
    return db('task')
        .join('project', 'project.id', 'task.project_id')
        .where({ task_id: task_id });
};

function addTask(data) {
    return db('task').insert(data);
};