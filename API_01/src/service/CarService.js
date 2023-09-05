const db = require('../db');

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM cars', (error, results) => {
        if (error) { reject(error); return; }
        resolve(results);
      });
    });
  },
  getOne: (codigo) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM cars WHERE codigo = ?', [codigo], (error, results) => {
        if (error) { reject(error); return; }
        if (results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(false);
        }
      });
    });
  },
  insert: (modelo, placa) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO cars (modelo, placa) VALUES (?, ?)', 
        [modelo, placa], 
        (error, results) => {
          if (error) { reject(error); return; }
          resolve(results.insertcodigo);
      });
    });
  },
  update: (codigo, modelo, placa) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE cars SET modelo = ?, placa = ? WHERE codigo = ?', 
        [modelo, placa, codigo], 
        (error, results) => {
          if (error) { reject(error); return; }
          resolve(results);
      });
    });
  },
  remove: (codigo) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM cars WHERE codigo = ?', [codigo], (error, results) => {
        if (error) { reject(error); return; }
        resolve(results);
      });
    });
  }
};