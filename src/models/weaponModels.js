const db = require('../config/database')

const getAll = () => {
    return db.execute('SELECT * FROM weapon');
}

const getId = (id) => {
    return db.execute(`SELECT * FROM weapon where id = ${id}`);
}

const insert = (body) => {
    return db.execute(`INSERT INTO weapon (name,damage,durability) VALUES ('${body.name}',${body.damage},'${body.durability})`);
}

const update = (body,id) => {
    const column = Object.keys(body)
        .map(col => `${col} = ?`)
        .join(', ');
    const values = Object.values(body);
    const query = `UPDATE weapon set ${column} WHERE id=${id}`
    return db.execute(query, values);
}

const destroy = (id) => {
    return db.execute(`DELETE FROM weapon where id = ${id}`);
}

module.exports = {getAll, getId, insert, update, destroy}