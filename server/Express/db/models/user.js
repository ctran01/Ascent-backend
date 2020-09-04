'use strict';
const bcrypt= require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  hashed_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Area,{
      as: 'followedAreas',
      through: {
        model: 'Follower',
        scope: {
          followable_type: 'area'
        }
      },
      foreignKey: 'user_id',
      constraints: false
    })

    User.belongsToMany(models.Route, {
      as: 'followedRoutes',
      through:{
        model: 'Follower',
        scope: {
          followable_type: 'route'
        }
      },
      foreignKey: 'user_id',
      constraints: false
    })

    //To see if this user follows any other user
    User.belongsToMany(models.User, {
      as: 'followedUsers',
      through: {
          model: 'Follower',
          scope: {
              followable_type: 'user'
          }

      },
      foreignKey: 'user_id',
      constraints: false
    })

    //To ensure that this user can also be followed 
    User.belongsToMany(models.User, {
      as: 'followers',
      through: {
          model: 'Follower',
          scope: {
              followable_type: 'user'
          }

      },
      foreignKey: 'followable_id',
      constraints: false
    })

    User.hasMany(models.Follower,{
      foreignKey: "user_id"
    })

    User.hasMany(models.Route,{
      foreignKey: 'user_id'
    })

    User.hasMany(models.Area,{
      foreignKey: 'user_id'
    })

  };
  User.prototype.validatePassword = function (password) {
    // Note that since this function is a model instance method,
    // `this` is the user instance here:
    return bcrypt.compareSync(password, this.hashed_password.toString());
};

  return User;
};