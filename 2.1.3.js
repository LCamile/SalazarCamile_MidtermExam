const pool = require("./db");
const sql = `SELECT film_id, title
FROM film
WHERE replacement_cost = (SELECT MAX(replacement_cost ) FROM film);`;



pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();