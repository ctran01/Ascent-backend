'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
    followable_type: {
      type: DataTypes.STRING
    },
    followable_id:{
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }

    } 
  }, {});
  Follower.associate = function(models) {
    // associations can be defined here
  };
  return Follower;
};