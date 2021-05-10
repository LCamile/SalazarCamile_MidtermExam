const pool = require("./db");
const sql = ` SELECT f.title, f.description, c.name "category"
FROM film f
JOIN film_category ff 
ON f.film_id = ff.film_id
JOIN category c
ON ff.category_id = c.category_id;`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();