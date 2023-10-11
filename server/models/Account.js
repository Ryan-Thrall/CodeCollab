module.exports = (sequelize, DataTypes) => {
  const Accounts = sequelize.define("Accounts", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    github: {
      type: DataTypes.STRING,
    },
    linkedin: {
      type: DataTypes.STRING,
    }
  });
}