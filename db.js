const sqliite3 = require('sqlite3').verbose()
const db = new sqliite3.Database('./ws.db')


db.serialize(function(){
    
    //Criar a tabela

    db.run(`
    CREATE TABLE IF NOT EXISTs ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
    );    
    `)


    

    //deletar um dado da tabela

    // db.run(`DELETE FROM ideas WHERE id = ?` , [1] , function(err){
    //     if (err) return console.log(err)

    //     console.log("DELETEI", this)
    // })

    //Consultar dados na Tabela

    // db.all(`SELECT * FROM ideas`, function(err, rows){
    //     if (err) return console.log(err)

    //     console.log(rows)
    // })

    
})

module.exports = db