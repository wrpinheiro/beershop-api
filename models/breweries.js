module.exports = (sequelize, DataType) => {
  const Breweries = sequelize.define("Breweries", {
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

  return Breweries;
};
