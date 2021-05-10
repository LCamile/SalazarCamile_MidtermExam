
const pool = require("./db");
const sql = `CREATE OR REPLACE PROCEDURE newRating 
(f_id int, rating1 CHARACTER VARYING)
language plpgsql AS
$$
BEGIN 
    UPDATE film
    SET rating = rating1::mpaa_rating
    WHERE film_id = f_id;
    commit;
    END;
    $$`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();
