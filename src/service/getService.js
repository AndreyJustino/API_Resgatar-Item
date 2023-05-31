import db from '../repository/connection.js'

async function Linguagens(){
    const sql = 'SELECT * FROM tbl_ator'

    const conn = await db.connect();
    const [rows] = await conn.query(sql)

    conn.end()

    return rows
}

export default {Linguagens}