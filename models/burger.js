module.exports = function(sequelize, DataTypes) {
  var BurgersTable = sequelize.define("BurgersTable", {
     burger_name: {
      type: DataTypes.STRING,
      allowNull: false
     },
     devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: true
     }
  });

  return BurgersTable;
};