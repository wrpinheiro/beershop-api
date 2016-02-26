module.exports = (sequelize, DataType) => {
  const Styles = sequelize.define("Styles", {
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
  });

  return Styles;
};
