import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123456",
    database: "Real_State_database",
  })
  .promise();

async function getCategories() {
  const [result] = await pool.query("Select * from categories");
  return [result];
}
console.log(await getCategories());
