const express = require('express');
const router = express.Router();

const ModelSchema = require('../Model/model_schema');

router.post('/', async (req, res) => {
    const newPostRequest = new ModelSchema(req.body);
    try {
        const api = await newPostRequest.save();
        if (!api) throw Error(`Oops!! Failed, Contact Technical Team`);
        res.status(200).json(api);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.get('/', async (req, res) => {
    try {
        const api = await ModelSchema.find();
        if (!api) throw Error('List is Empty!!');
        res.status(200).json(api);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const api = await ModelSchema.findByIdAndDelete(req.params.id);
        if (!api) throw Error('No data found!!');
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const api = await ModelSchema.findByIdAndUpdate(req.params.id, req.body);
        if (!api) throw Error('Failed to update, try again!!');
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const api = await ModelSchema.findById(req.params.id);
        if (!api) throw Error(`Couldn't Found!!`);
        res.status(200).json(api);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

module.exports = router;