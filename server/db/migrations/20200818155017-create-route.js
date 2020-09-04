'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Routes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      type: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      grade: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      description:{
        type: Sequelize.TEXT
      },
      image_url: {
        type: Sequelize.STRING(150)
      },
      latitude: {
        type: Sequelize.NUMERIC(14,7)
      },
      longitude: {
        type: Sequelize.NUMERIC(14,7)
      },
      area_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Areas'}
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Users'}
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Routes');
  }
};