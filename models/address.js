'use strict';

module.exports = (sequelize, DataTypes) => {
    const address = sequelize.define('address', {
        vilageName: {
            type: DataTypes.STRING,
            allowNull: false
          },
          districk: {
            type: DataTypes.STRING
            // allowNull defaults to true
          },
          state: {
            type: DataTypes.STRING
            // allowNull defaults to true
          },
          country: {
            type: DataTypes.STRING
            // allowNull defaults to true
          }
    });

    return address;
};