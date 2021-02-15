'use strict';

module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
          },
          email: {
            type: DataTypes.STRING
            // allowNull defaults to true
          },
          phone: {
            type: DataTypes.STRING
            // allowNull defaults to true
          },
          addressId: {
            type: DataTypes.STRING
            // allowNull defaults to true
          }
    });
    users.associate =(models)=>{
      users.belongsTo(models.address,{ foreignKey: 'addressId'} )
    }
    return users;
};