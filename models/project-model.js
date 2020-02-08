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
    return db('project').where({ project_id: project_id });
};

function addProjects(data) {
    return db('project').insert(data);
};