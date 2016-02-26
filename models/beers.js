module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([
        {id: 1, name: "Pilsen", style: {id: 3, name: "Pilsen"}, brewery: {id: 1, name: "Eisenbahn"}},
        {id: 2, name: "Weissbier", style: {id: 2, name: "Weissbier"}, brewery: {id: 1, name: "Eisenbahn"}},
      ]);
    }
  };
}
