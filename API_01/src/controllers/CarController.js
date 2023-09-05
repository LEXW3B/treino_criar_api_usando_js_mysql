const carService = require('../service/CarService');



module.exports = {
  async getAll(req, res) {
    let json = { error: '', result: [] };

    let cars = await carService.getAll();

    for (let i in cars) {
      json.result.push({
        codigo: cars[i].codigo,
        modelo: cars[i].modelo,
      });
    }
    res.json(json);
  },

  getOne: async (req, res) => {
    let json = { error: '', result: {} };

    let codigo = req.params.codigo;
    let car = await carService.getOne(codigo);

    if (car) {
      json.result = car;
    }

    res.json(json);
  },

  insert: async (req, res) => {
    let json = { error: '', result: {} };

    let modelo = req.body.modelo;
    let placa = req.body.placa;

    if (modelo && placa) {
      let CarCodigo = await carService.insert(modelo, placa);
      json.result = {
        codigo: CarCodigo,
        modelo,
        placa
      };
    } else {
      json.error = 'fields not sent';
    }

    res.json(json);
  },

  update: async (req, res) => {
    let json = { error: '', result: {} };

    let codigo = req.params.codigo;
    let modelo = req.body.modelo;
    let placa = req.body.placa;

    if (codigo && modelo && placa) {
      await carService.update(codigo, modelo, placa);
      json.result = {
        codigo,
        modelo,
        placa
      };
    } else {
      json.error = 'fields not sent';
    }

    res.json(json);
  },
  
  remove: async (req, res) => {
    let json = { error: '', result: {} };

    await carService.remove(req.params.codigo);

    res.json(json);
  }
};
