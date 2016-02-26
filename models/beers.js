module.exports = (sequelize, DataType) => {
  const Beers = sequelize.define("Beers", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    classMethods: {
      associate: (models) => {
      }
    }
  });

  return Beers;
}
