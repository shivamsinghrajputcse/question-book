import mysql, {MysqlError, Connection} from "mysql"

const UserName = process.env.DB_USER_NAME;
const Password = process.env.DB_PASSWORD;
const Database = process.env.DATABASE_NAME;
const Host = process.env.DB_HOST;

const connection:Connection = mysql.createConnection({
    host: Host as string,
    user: UserName as string,
    password: Password as string,
    database: Database as string
});

function openConnection(): void
{
    connection.connect((err: MysqlError)=>{
        if(err)
        {
            console.error("Could not connect to the database", err);
        }
        else{
            console.log("connection to Database is successful.");
        }
    });
}

function closeConnection(): void
{
    connection.end((err?: MysqlError) =>{
        if (err) {
          console.log('Could not close connection:' , err);
        }
        console.log('Connection to the database is closed.');
    });    
}

export {openConnection, closeConnection};