const pool = require("./db");
const sql = `SELECT f.title, l.name "language", f.rating, f.rental_rate "price"
FROM film f
JOIN language l
ON f.language_id = l.language_id;`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();