const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Candidate = sequelize.define('candidate', {
    name: { type: DataTypes.STRING, allowNull: false },
    points: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = { Candidate }