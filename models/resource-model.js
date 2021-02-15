const db = require('../data/db-config');

module.exports = {
    getResources,
    getResourcesById,
    addResources
};

function getResources() {
    return db('resource');
};

function getResourcesById(resource_id) {
    return db('resource').where({ resource_id: resource_id });
};

function addResources(data) {
    return db('resource').insert(data);
};