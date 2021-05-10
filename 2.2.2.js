const pool = require("./db");
const sql = `SELECT c.name "Category name" , COUNT (f.film_id) "Film count"
FROM public.film f, film_category ff, category c
WHERE f.film_id = ff.film_id
AND ff.category_id = c.category_id
GROUP BY c.name ORDER BY c.name ASC
;`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();