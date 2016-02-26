module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([
        {id: 1, name: "Pale Ale"},
        {id: 2, name: "Witbier"}
      ]);
    }
  };
};
