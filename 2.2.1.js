const pool = require("./db");
const sql = `CREATE VIEW midterm_list_of_films AS 
SELECT f.film_id "fid", f.title, c.name "category", f.rental_rate "price", f.rating,
GROUP_CONCAT(CONCAT(a.first_name,' ',a.last_name))"actor"
FROM public.film f, film_category ff, category c, film_actor fa, actor a
WHERE f.film_id = ff.film_id
AND ff.category_id = c.category_id
AND fa.film_id = f.film_id
AND fa.actor_id = a.actor_id
GROUP BY f.film_id, f.title, c.name, f.rental_rate, f.rating;`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();