const db = require('../data/db-config');

module.exports = {
    getProjects,
    getProjectsById,
    addProjects
};

function getProjects() {
    return db('project');
};

function getProjectsById(project_id) {
    return db('project')
        .join('task', 'project.id', 'task.project_id')
        .join('project_resource', 'project.id', 'project_resource.project_id')
        .join('resource', 'resource.id', 'project_resource.resource_id')
        .where({ 'project.id': project_id });
};

function addProjects(data) {
    return db('project').insert(data);
};