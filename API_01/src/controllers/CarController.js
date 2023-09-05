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
  }
};
