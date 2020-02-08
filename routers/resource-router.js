const express = require('express');

const Resources = require('../models/resource-model');

const router = express.Router();

//include endpoints for adding resources and for retrieving them.

router.get('/', async (req, res) => {
    try {
        const reso = await Resources.getResources();
        res.status(200).json(reso);
    } catch (err) {
        res.status(500).json({ message: 'Could not retrieve resources.', err});
    };
});

router.get('/:id', async (req, res) => {
    const resource_id = req.params.id;

    try{
        const reso = await Resources.getResourcesById(resource_id);
        res.status(200).json(reso);
    } catch (err) {
        res.status(500).json({ message: 'Could not retrieve resource.', err});
    };
});

rounter.post('/', async (req, res) => {
    const data = req.body;

    try {
        const reso = await Resources.addResources(data);
        res.status(200).json(reso);
    } catch (err) {
        res.status(500).json({ message: 'Could not add resource.', err});
    };
});

module.exports = router;