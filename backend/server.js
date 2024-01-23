const mysql = require('mysql');
const express = require('express');

const app = express();
const port = 3000;


const connection = mysql.createConnection({
    host: 'database-1.chc0446c4ofn.us-west-1.rds.amazonaws.com',
    user: 'admin',
    password: '1102ab1102',
    database: 'database-1',
    connectTimeout: 10000 
});

connection.connect((err) => {
    if (err){
    console.log('Failed to connect to MySQL Server: ' + err.stack);
    return;
    }

    console.log('Connected to MySQL Server. ID: ' + db.threadId);
});

app.use(express.json());

//API ENDpoint: water the flower
app.post('/water', (req, res) => {
    const lastWatered = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const query = "UPDATE flower SET lastWatered = ? WHERE id = 1";

    connection.query(query, [lastWatered], (err, result) => {
        if(err) {
            res.status(500).json({message: "Error updating lastWatered", lastWatered: lastWatered});
        }else{
            res.json({message: "Flower watered successfully", lastWatered: lastWatered});
        }
    });
});

//API ENDpoint: get last watered time
app.get('/last-watered', (req, res) => {
    const query = "SELECT lastWatered FROM flower WHERE id = 1";

    connection.query(query, (err, result) => {
        if(err) {
            res.status(500).json({message: "Error getting lastWatered"});
        }else{
            res.json({message: "Last watered time retrieved successfully", lastWatered: result[0].lastWatered});
        }
    });
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});
