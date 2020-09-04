'use strict';
module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    type:{
      type: DataTypes.STRING,
      allowNull: false
    },
    grade:{
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    image_url: DataTypes.STRING,
    latitude: DataTypes.NUMERIC,
    longitude: DataTypes.NUMERIC,
    area_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Route.associate = function(models) {
    // associations can be defined here

    Route.belongsToMany(models.User, {
      as: 'followers',
      through: {
          model: 'Follower',
          scope: {
              followable_type: 'route'
          }
      },
      foreignKey: 'followable_id',
      constraints: false
  })

    Route.belongsTo(models.Area, {
      foreignKey: 'area_id'
    })
    Route.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
  };
  return Route;
};