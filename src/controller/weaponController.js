const model = require('../models/weaponModels')

const getAll = async (req, res) => {
    try {
        const [data] = await model.getAll();
        res.json({
            message: "Get weapon all succeed",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            serverMessage: error
        })
    }
};

const getId = async (req, res) => {
    try {
        const {id} = req.params
        const [data] = await model.getId(id);
        if (data.length > 0) {
            msg = `Get weapon id = ${id} succeed`;
        } else {
            msg = "Weapon tidak ditemukan";
        }
        res.json({
            message: msg,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            serverMessage: error
        })
    }
};

const create = async (req, res) => {
    const {body} = req;
    try {
        await model.insert(body);
        res.status(201).json({
            message: "Post weapon succeed",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            serverMessage: error
        })
    }
}

const update = async (req, res) => {
    const {id} = req.params
    const {body} = req;
    const [data] = await model.getId(id);
    if (data.length > 0) {
        msg = `Update weapon id = ${id} succeed`;
    } else {
        msg = "Weapon tidak ditemukan";
    }
    try {
        await model.update(body,id)
        res.status(201).json({
            message: msg,
            data: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            serverMessage: error
        })
    }
};

const destroy = async (req, res) => {
    const {id} = req.params
    const [data] = await model.getId(id);
    if (data.length > 0) {
        msg = `Delete weapon id = ${id} succeed`;
    } else {
        msg = "Weapon tidak ditemukan";
    }
    try {
        await model.destroy(id);
        res.json({
            message: msg
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            serverMessage: error
        })
    }
}

module.exports = {getAll,getId,create,update,destroy};