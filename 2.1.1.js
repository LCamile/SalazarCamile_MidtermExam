const pool = require("./db");
const sql = `SELECT COUNT (film_id) FROM public.film;`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();