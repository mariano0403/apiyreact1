const {Model, DataTypes} = require('sequelize');
const sequelize = require('../bbdd');

class Alumno extends Model{}

Alumno.init({
    id:{
        autoIncrement:true,
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true
    },
    legajo:{
        type:DataTypes.INTEGER,
        allowNull:false 
    },
    nombreDePila:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    condicion:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    nota:{
        type:DataTypes.INTEGER,
        allowNull:false 
    }
},{
    sequelize,
    tableName:'alumnos',
    timestamps:false
});
module.exports=Alumno;