module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([
        {id: 1, name: "Eisenbahn"}
      ]);
    }
  };
}
