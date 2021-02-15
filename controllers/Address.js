const models = require('../models/index');
let response = {}
exports.create = async (req, res) => {
    return response = await models.address
        .create({
            vilageName: req.body.vilageName,
            districk: req.body.districk,
            state: req.body.state,
            country: req.body.country,
        })
        .then(todo => res.status(201).send(todo))
        .catch(error => res.status(400).send(error));
}

exports.update = async (req, res) => {
    return response = await models.address
        .findByPk(req.params.id)
        .then(async (todo) => {
            let data = {}
            if (!todo) {
                res.status(404).send({ message: "Data not found" })
            } else {
                await models.address.update({
                    vilageName: req.body.vilageName,
                    districk: req.body.districk,
                    state: req.body.state,
                    country: req.body.country,
                }, { where: { id: req.params.id } })
                    .then(todo => res.status(202).send(todo))
                    .catch(error => res.status(400).send(error));
            }

        })
        .catch(error => res.status(400).send(error));
}

exports.getAll = async (req, res) => {
    return response = await models.address
        .findAll()
        .then(todo => res.status(201).send(todo))
        .catch(error => res.status(400).send(error));
}

exports.getByid = async (req, res) => {
    return response = await models.address
        .findByPk(req.params.id)
        .then(todo => res.status(201).send(todo))
        .catch(error => res.status(400).send(error));
}

exports.delete = async (req, res) => {
    return response = await models.address
        .findByPk(req.params.id)
        .then(todo => {
            if (!todo) {
                res.json(404).send("Record not fount")
            } else {
                return todo
                    .destroy({ where: { id: req.params.id } })
                    .then(() => res.status(200).send(todo))  // Send back the updated todo.
                    .catch((error) => res.status(400).send(error));
            }
            res.status(201).send(todo)
        })
        .catch(error => res.status(400).send(error));
}