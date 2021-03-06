const models = require('../models/index');
let response = {}
exports.create = async (req, res) => {
    return response = await models.users
        .create({
            userName: req.body.userName,
            email: req.body.email,
            phone: req.body.phone,
            addressId: req.body.addressId,
        })
        .then(todo => res.status(201).send(todo))
        .catch(error => res.status(400).send(error));
}

exports.update = async (req, res) => {
    return response = await models.users
        .findByPk(req.params.id)
        .then( async (todo) => {
            let data={}
            if (!todo) {
                res.status(404).send({ message: "Data not found" })
            } else {
                 await  models.users.update({
                    userName: req.body.userName,
                    email: req.body.email,
                    phone: req.body.phone,
                    addressId: req.body.addressId,
                }, { where: { id: req.params.id } })
                    .then(todo => res.status(202).send(todo))
                    .catch(error => res.status(400).send(error));
            }
            
        })
        .catch(error => res.status(400).send(error));
}

exports.getAll = async (req, res) => {
    return response = await models.users
        .findAll()
        .then(todo => res.status(201).send(todo))
        .catch(error => res.status(400).send(error));
}

exports.getByid = async (req, res) => {
    return response = await models.users
        .findByPk(req.params.id)
        .then(todo => res.status(201).send(todo))
        .catch(error => res.status(400).send(error));
}

exports.delete = async (req, res) => {
    return response = await models.users
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