'use strict';
module.exports = (sequelize, DataTypes) => {
  const Area = sequelize.define('Area', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    image_url: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Area.associate = function(models) {
    // associations can be defined here

    Area.belongsToMany(models.User,{
      as: 'followers',
      through: {
        model: 'Follower',
        scope:{
          followable_type: 'area'
        }
      },
      foreignKey: 'followable_id',
      constraints: false
    })

    Area.hasMany(models.Route,{
      foreignKey: 'area_id'
    })

    Area.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
  };
  return Area;
};