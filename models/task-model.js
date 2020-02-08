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
        .select('project.project_name', 'project.project_desc', 'task.id', 'task.task_desc', 'task.task_notes', 'task.task_completed')
        .where({ 'task.id': task_id });
};

function addTask(data) {
    return db('task').insert(data);
};