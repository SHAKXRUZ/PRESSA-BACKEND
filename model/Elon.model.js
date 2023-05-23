const { sequelize, DataTypes, UUIDV4 } = require("../config/db_config");

const Elon = sequelize.define("elon", {
  id: {
    type: DataTypes.TEXT,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  sana: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vaqt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  yunalish: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ichki_yunalish: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tadbir_turi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ismsharif: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  professiya: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telifon1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telifon2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  elon_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mavzumatni: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tasdiqlangan: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
});
module.exports = Elon;
