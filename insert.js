const db = require('./backend/db');

db.run(`INSERT INTO users (username, password) VALUES ('admin', 'admin123')`, (err) => {
    if (err) console.log(err);
    else console.log('Usuario agregado');
});
