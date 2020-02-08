const express = require('express');

const Tasks = require('../models/task-model');

const router = express.Router();

//include endpoints for adding tasks and for retrieving them.
//lists of tasks MUST include the project name and project descriptions

router.get('/', async (req, res) => {
    try {
        const tas = await Tasks.getTask();
        res.status(200).json(tas);
    } catch (err) {
        res.status(500).json({ message: 'Could not retrieve tasks.', err});
    };
});

router.get('/:id', async (req, res) => {
    const task_id = req.params.id;

    try {
        const tas = await Tasks.getTaskById(task_id);
        res.status(200).json(tas);
    } catch (err) {
        res.status(500).json({ message: 'Could not retrieve task.', err});
    };
});

router.post('/', async (req, res) => {
    const data = req.body;

    try {
        const tas = await Tasks.addTask(data);
        res.status(200).json(tas);
    } catch (err) {
        res.status(500).json({ message: 'Could not add task.', err});
    };
});

module.exports = router;