const pool = require("./db");
const sql = `SELECT
rating "rating", SUM(rental_duration) FROM public.film 
GROUP BY rating ORDER BY rating ASC;`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();