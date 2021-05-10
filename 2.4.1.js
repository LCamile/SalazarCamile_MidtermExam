

const pool = require("./db");
const sql = `CREATE OR REPLACE FUNCTION GetFilmName(f_id INT)
RETURNS VARCHAR(255)
language plpgsql AS 
$$
DECLARE title_name VARCHAR(255);
BEGIN

SELECT f.title INTO title_name
FROM film f
WHERE f.film_id = f_id;
RETURN title_name;
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
